import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [NgFor, MatIconModule, NgOptimizedImage, ObserveVisibilityDirective],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent implements OnDestroy{
  videoUrl: SafeResourceUrl | null = null;
  private dialogRef: MatDialogRef<VideoDialogComponent> | null = null; // Almacena la referencia del modal
  reasons = [
    { icon: 'check_circle', title: 'Profesionales experimentados', description: 'Personal altamente capacitado con años de experiencia en la industria química.' },
    { icon: 'check_circle', title: 'Servicios industriales confiables', description: 'Servicios confiables para diversas industrias, garantizando calidad y seguridad.' },
    { icon: 'check_circle', title: 'Atención inmediata', description: 'Atención al cliente inmediata para resolver cualquier inquietud.' }
  ];

  constructor(public dialog: MatDialog, private sanitizer: DomSanitizer) {}

  openVideoDialog(videoUrl: string): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    this.dialogRef = this.dialog.open(VideoDialogComponent, { // ✅ Guardamos la referencia
      width: '800px',
      data: { videoUrl: this.videoUrl }
    });
  }

  ngOnDestroy(): void {
    if (this.dialogRef) {
      this.dialogRef.close(); // ✅ Cierra el modal si sigue abierto al cambiar de página
    }
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
      <button mat-button (click)="closeDialog()">Cerrar</button> <!-- ✅ Asegurar que cierre -->
    </div>
  `
})
export class VideoDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<VideoDialogComponent>, // ✅ Referencia al modal
    @Inject(MAT_DIALOG_DATA) public data: { videoUrl: SafeResourceUrl }) {} // ✅ Ahora sí reconoce Inject
  closeDialog() {
    this.dialogRef.close(); // ✅ Cierra el modal manualmente
  }
}
