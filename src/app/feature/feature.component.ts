import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-feature',
  imports: [NgFor, MatIconModule, NgOptimizedImage],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  videoUrl: SafeResourceUrl | null = null;
  reasons = [
    { icon: 'check_circle', title: 'Profesionales experimentados', description: 'Personal altamente capacitado con años de experiencia en la industria química.' },
    { icon: 'check_circle', title: 'Servicios industriales confiables', description: 'Servicios confiables para diversas industrias, garantizando calidad y seguridad.' },
    { icon: 'check_circle', title: 'Atención inmediata', description: 'Atención al cliente inmediata para resolver cualquier inquietud.' }
  ];

  constructor(public dialog: MatDialog, private sanitizer: DomSanitizer) {}

  openVideoDialog(videoUrl: string): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    this.dialog.open(VideoDialogComponent, {
      width: '800px',
      data: { videoUrl: this.videoUrl }
    });
  }
}



// Componente para el diálogo del video
@Component({
  selector: 'app-video-dialog',
  template: `
    <div mat-dialog-content>
      <iframe
        class="w-full aspect-video"
        [src]="data.videoUrl"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
    <div mat-dialog-actions class="flex justify-end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </div>
  `
})
export class VideoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { videoUrl: SafeResourceUrl }) {} // ✅ Ahora sí reconoce Inject
}
