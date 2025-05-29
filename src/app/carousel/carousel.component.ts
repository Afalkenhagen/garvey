import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule,NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  animations: [
    trigger('slideText', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-40px)' }),
        animate('600ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease', style({ opacity: 0, transform: 'translateY(40px)' }))
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit, OnDestroy{
  slides = [
      {
        image: '/carousel-1.webp',
        caption: '25 años de solida experiencia',
        title: 'Proveedores de soluciones industriales',
      },
      {
        image: '/carousel-2.webp',
        caption: 'Siempre ampliando los horizontes',
        title: 'Soluciones confiables para la industria',
      }
    ];
  
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
    currentSlide = 0;
  
    intervalId: number | undefined;
  
    fadeIn = true;
  
    ngOnInit() {
      this.startAutoSlide();
    }
  
    ngOnDestroy() {
      this.stopAutoSlide(); // Limpiar el intervalo al destruir el componente
    }
  
  startAutoSlide() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = window.setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  }
  
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = undefined; // Limpiar el ID del intervalo
      }
    }
  
    nextSlide() {
      this.fadeIn = false; // Iniciar la animación de salida
      setTimeout(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.fadeIn = true; // Iniciar la animación de entrada
      }, 500); // Debe coincidir con la duración de la animación CSS
    }
  
    prevSlide() {
      this.fadeIn = false; // Iniciar la animación de salida
      setTimeout(() => {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.fadeIn = true; // Iniciar la animación de entrada
      }, 500); // Debe coincidir con la duración de la animación CSS
    }

}
