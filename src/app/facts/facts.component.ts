import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList, PLATFORM_ID, Inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-facts',
  imports: [CommonModule],
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.scss'
})
export class FactsComponent implements AfterViewInit {
  facts = [
    { icon: 'fa-certificate', number: 25, text: 'Años de experiencia' },
    { icon: 'fa-users-cog', number: 34, text: 'Certificaciones' },
    { icon: 'fa-users', number: 1957, text: 'Clientes satisfechos' },
    { icon: 'fa-check-double', number: 1839, text: 'Productos elaborados' }
  ];

  @ViewChildren('counter') counters!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Verificar si estamos en el navegador antes de usar IntersectionObserver
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      this.counters.forEach((counter) => observer.observe(counter.nativeElement));
    }
  }

  animateCounter(element: Element): void {
    const target = +element.getAttribute('data-target')!;
    let current = 0;
    const increment = target / 100;
    const speed = 20;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        element.textContent = Math.floor(current).toString();
        setTimeout(updateCounter, speed);
      } else {
        element.textContent = target.toString();
      }
    };

    updateCounter();
  }
}
