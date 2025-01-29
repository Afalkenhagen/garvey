import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  lastScrollTop = 0;
  menuTimeout: any;

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
      if (scrollTop > 0) {
        navbar.classList.add('bg-opacity-75');
      } else {
        navbar.classList.remove('bg-opacity-75');
      }
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.startMenuTimeout();
    } else {
      clearTimeout(this.menuTimeout);
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    clearTimeout(this.menuTimeout);
  }

  startMenuTimeout() {
    this.menuTimeout = setTimeout(() => {
      this.closeMenu();
    }, 3000); // 3000 ms = 3 seconds
  }
}

// import { NgIf } from '@angular/common';
// import { Component, HostListener } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';


// @Component({
//   selector: 'app-navbar',
//   imports: [NgIf, RouterLink, RouterLinkActive],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {
//   isMenuOpen = false;
//   lastScrollTop = 0;

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     const navbar = document.getElementById('navbar');
//     if (navbar) {
//       const scrollTop = window.scrollY;
//       if (scrollTop > this.lastScrollTop) {
//         // Scroll down
//         navbar.classList.add('-translate-y-full');
//         navbar.classList.remove('translate-y-0');
//       } else {
//         // Scroll up
//         navbar.classList.remove('-translate-y-full');
//         navbar.classList.add('translate-y-0');
//       }
//       if (scrollTop > 0) {
//         navbar.classList.add('bg-opacity-75');
//       } else {
//         navbar.classList.remove('bg-opacity-75');
//       }
//       this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
//     }
//   }
//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }
// }