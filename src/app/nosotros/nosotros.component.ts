import { Component } from '@angular/core';
import { FactsComponent } from '../facts/facts.component';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from '../about/about.component';
import { RouterLink } from '@angular/router';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';

@Component({
  selector: 'app-nosotros',
  imports: [FactsComponent, NgOptimizedImage, MatIconModule, AboutComponent, RouterLink, ObserveVisibilityDirective],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  
}
