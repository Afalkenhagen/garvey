import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgIf, FooterComponent, CommonModule, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'garvey';
  isMenuScrolled = false;
  isSidebarShowing = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.scrollY > 100)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;
      console.log(this.isMenuScrolled)
  }
  openSideBar() {
    this.isSidebarShowing = true;
  }
  closeSideBar() {
    this.isSidebarShowing = false;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  // Variables de Loader entre rutas
  isLoading = false;
  private firstLoad = true; // Nueva variable para detectar la primera carga

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Si es la primera carga y estamos en la página de inicio, no mostrar el Loader
        if (this.firstLoad && (this.router.url === '/' || this.router.url === '/home')) {
          this.firstLoad = false; // Marcar que ya pasó la primera carga
          return;
        }
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.firstLoad = false; // Marcar que ya no es la primera carga
        setTimeout(() => this.isLoading = false, 500);
      }
    });
  }
}
