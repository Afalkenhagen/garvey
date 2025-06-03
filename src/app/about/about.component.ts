import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';

@Component({
  selector: 'app-about',
  imports: [NgFor, NgOptimizedImage, MatIconModule, ObserveVisibilityDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
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
