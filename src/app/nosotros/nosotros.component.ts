import { Component } from '@angular/core';
import { FactsComponent } from '../facts/facts.component';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nosotros',
  imports: [FactsComponent, NgFor, NgOptimizedImage, MatIconModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent {
  experienceYears: number = 25;
  contactEmail: string = 'info@quimicagarvey.com.ar';
  contactPhone: string = '+54-223-616-9922';
  services: string[] = [
    'Industria Alimentaria y Pesquera',
    'Sector Metalúrgico e Industrial',
    'Industria Farmacéutica y Veterinaria',
    'Energía y Medio Ambiente',
    'Higiene Institucional y Mantenimiento'
  ];
}
