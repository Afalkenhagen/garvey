import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';


@Component({
  selector: 'app-productos',
  imports: [NgOptimizedImage, RouterLink, CategoryComponent, RouterLinkActive, ObserveVisibilityDirective],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

}
