import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category',
  imports: [NgFor, MatIconModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categorias = [
    { nombre: 'Sanatorios e Instituciones de Salud', icono: 'local_hospital' },
    { nombre: 'Instituciones Educativas', icono: 'school' },
    { nombre: 'Hoteles', icono: 'hotel' },
    { nombre: 'Gastronomía', icono: 'storefront' },
    { nombre: 'Pesqueras e Industrias', icono: 'factory' },
    { nombre: 'Consorcios', icono: 'apartment' }
  ];
}
