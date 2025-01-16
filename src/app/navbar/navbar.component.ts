import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const scrollTop = window.scrollY;
      if (scrollTop > this.lastScrollTop) {
        // Scroll down
        navbar.classList.add('-translate-y-full');
        navbar.classList.remove('translate-y-0');
      } else {
        // Scroll up
        navbar.classList.remove('-translate-y-full');
        navbar.classList.add('translate-y-0');
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }
  }

  //VERSION SIEMPRE VISIBLE
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const navbar = document.getElementById('navbar');
  //   if (navbar) {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > this.lastScrollTop) {
  //       // Scroll down
  //       navbar.classList.remove('-translate-y-full');
  //       navbar.classList.add('translate-y-0');
  //     } else {
  //       // Scroll up
  //       navbar.classList.remove('-translate-y-full');
  //       navbar.classList.add('translate-y-0');
  //     }
  //     this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  //   }
  // }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
