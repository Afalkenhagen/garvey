import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoryComponent } from '../category/category.component';


@Component({
  selector: 'app-productos',
  imports: [NgOptimizedImage, RouterLink, CategoryComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

}
