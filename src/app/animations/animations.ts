import { trigger, style, transition, animate } from '@angular/animations';

// Fade-in animation
export const fadeInAnimation = trigger('fadeIn', [
  transition(':enter', [ // When the element is added to the DOM
    style({ opacity: 0 }), // Start with opacity 0
    animate('1s ease-in', style({ opacity: 1 })) // Gradually increase opacity
  ])
]);