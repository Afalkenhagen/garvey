import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  template: `
    <div class="w-full h-full flex justify-center items-center p-4">
      <iframe
        [src]="safeUrl"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
        class="rounded-lg shadow-lg w-full max-w-3xl aspect-video">
      </iframe>
    </div>
    <div class="flex justify-end p-4">
      <button mat-button mat-dialog-close>Cerrar</button>
    </div>
  `
})
export class VideoDialogComponent {
  safeUrl: SafeResourceUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { videoUrl: string },
    private sanitizer: DomSanitizer
  ) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.videoUrl);
  }
}
