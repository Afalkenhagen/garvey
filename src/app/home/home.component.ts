import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides = [
    {
      image: '/carousel-1.jpg',
      caption: '25 años de solida experiencia',
      title: 'Proveedores de soluciones industriales',
    },
    {
      image: '/carousel-2.jpg',
      caption: 'Siempre ampliando los horizontes',
      title: 'La mejor solución confiable para la industria',
    }
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
