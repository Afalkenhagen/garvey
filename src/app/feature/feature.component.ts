import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { VideoDialogComponent } from './video-dialog.component';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [NgFor, MatIconModule, NgOptimizedImage, ObserveVisibilityDirective, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent{
  reasons = [
    { icon: 'check_circle', title: 'Profesionales experimentados', description: 'Personal altamente capacitado con años de experiencia en la industria química.' },
    { icon: 'check_circle', title: 'Servicios industriales confiables', description: 'Servicios confiables para diversas industrias, garantizando calidad y seguridad.' },
    { icon: 'check_circle', title: 'Atención inmediata', description: 'Atención al cliente inmediata para resolver cualquier inquietud.' }
  ];
  constructor(private dialog: MatDialog) {}

  openVideo() {
    this.dialog.open(VideoDialogComponent, {
      width: '800px',
      data: {
        videoUrl: 'https://www.youtube.com/embed/Q1ji1WvY0Mk?si=K8CRciy191HEOBWQ'
      }
    });
  }
}