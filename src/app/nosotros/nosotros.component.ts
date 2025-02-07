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
  contactPhone: string = '+012 345 6789';
  services: string[] = [
    'Power & Energy',
    'Civil Engineering',
    'Chemical Engineering',
    'Mechanical Engineering',
    'Oil & Gas Engineering'
  ];
}
