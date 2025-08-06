import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';

@Component({
  selector: 'app-contacto',
  imports: [RouterLink, ObserveVisibilityDirective],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

}
