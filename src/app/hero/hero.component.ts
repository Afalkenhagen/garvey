import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Container, EnterExitLeft, EnterExitRight } from '../animations/children.animation';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [Container,EnterExitLeft,EnterExitRight]
})
export class HeroComponent {
  isDisplayed = false;
  ngOnInit() {
    // Simula una condición para mostrar el contenido después de un tiempo
    setTimeout(() => {
      this.isDisplayed = true;
    }, 800); // Muestra el contenido después de 1 segundos
  }
}
