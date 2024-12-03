import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "nav", component: NavbarComponent},
    { path: "footer", component: FooterComponent}
];
