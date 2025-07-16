import { NgFor, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { VideoDialogComponent } from './video-dialog.component';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID, Component } from '@angular/core';

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
  videoModalClosed = false;
  isBrowser = false;
  
  constructor(
  private dialog: MatDialog,
  @Inject(PLATFORM_ID) private platformId: Object
) {
  this.isBrowser = isPlatformBrowser(this.platformId);
  if (this.isBrowser) {
    this.videoModalClosed = !!localStorage.getItem('videoModalClosed');
  }
}

  openVideo() {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      width: '800px',
      data: {
        videoUrl: 'https://www.youtube.com/embed/Q1ji1WvY0Mk?si=K8CRciy191HEOBWQ'
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.videoModalClosed = true;
        localStorage.setItem('videoModalClosed', 'true');
      }
    });
  }
}