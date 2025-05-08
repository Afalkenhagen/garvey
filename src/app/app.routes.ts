import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { LimpiezaComponent } from './limpieza/limpieza.component';
import { AditivosComponent } from './aditivos/aditivos.component';
import { MateriaComponent } from './materia/materia.component';
import { ProduccionComponent } from './produccion/produccion.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "nav", component: NavbarComponent},
    { path: "footer", component: FooterComponent},
    { path: "contacto", component: ContactoComponent},
    {path: "nosotros", component: NosotrosComponent},
    {path: "productos", component: ProductosComponent},
    {path: "limpieza", component: LimpiezaComponent},
    {path: "aditivos", component: AditivosComponent},
    {path: "materia", component: MateriaComponent},
    {path: "produccion", component: ProduccionComponent}
];
