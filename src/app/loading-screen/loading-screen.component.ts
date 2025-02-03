import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  imports: [NgIf],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss',
  standalone: true,
  styles: [`
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .loader {
      border: 6px solid #f3f3f3;
      border-top: 6px solid #3498db;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoadingScreenComponent {
  @Input() isLoading = false;
}
