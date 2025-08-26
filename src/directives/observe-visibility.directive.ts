import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID, Renderer2 } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[observeVisibility]'
})
export class ObserveVisibilityDirective implements OnDestroy, OnInit, AfterViewInit {

  // reverse show styles
  @Input('hide') hideStyles: any = { 'opacity': '0', 'transform': 'translateY(20px)' };
  // default show styles
  @Input('show') showStyles: any = { 'opacity': '1', 'transform': 'translateY(0)' };
  // animation duration
  @Input() duration: number = 400;
  // animation delay
  @Input() delay: number = 0;
  // animation easing
  @Input() easing: '' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' = '';
  // what percentage should be visible before triggering
  @Input() threshold: number = 0.4;
  // root margin
  @Input() rootMargin: string = '0px';

  // emit event when element enters intersects
  @Output() intersection = new EventEmitter<ElementRef>();

  // animation
  animation: AnimationPlayer | null = null;

  // intersection observer
  private _observer: IntersectionObserver | null = null;

  // intersection trigger
  private _intersect$ = new Subject<void>();

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _builder: AnimationBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.setHideStyles();
    this.createAnimation();
    this.createObserver();
    this.startObserving();
  }

  ngAfterViewInit() {
    this._intersect$.subscribe(() => {
      const target = this._element.nativeElement;
      if (this.animation) {
        this.animation.play();
      }
      this.intersection.emit(this._element.nativeElement);
      // cancel after firing once
      this._observer?.unobserve(target);
    });
  }

  // create observer, only if platform is browser
  createObserver() {
    if (!isPlatformBrowser(this.platformId)) {
      return; // no IntersectionObserver on server side
    }

    const options = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    };

    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= this.threshold) {
          this._intersect$.next();
        }
      });
    }, options);
  }


  // hide element styles
  setHideStyles() {
    for (const style of Object.keys(this.hideStyles)) {
      this._renderer.setStyle(this._element.nativeElement, style, this.hideStyles[style]);
    }
  }

  // create animation
  createAnimation() {
    const factory = this._builder.build([animate(`${this.duration}ms ${this.delay}ms ${this.easing}`.trim(), style(this.showStyles))]);
    this.animation = factory.create(this._element.nativeElement);
  }

  // start observing
  startObserving() {
    if (this._observer) {
      this._observer.observe(this._element.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
    this._intersect$.complete();
  }
}