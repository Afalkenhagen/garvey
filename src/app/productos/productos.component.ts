import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CategoryComponent } from '../category/category.component';


@Component({
  selector: 'app-productos',
  imports: [NgOptimizedImage, RouterLink, CategoryComponent, RouterLinkActive],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

}
