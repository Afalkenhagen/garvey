import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-swcarousel',
  imports: [RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swcarousel.component.html',
  styleUrl: './swcarousel.component.scss'
})
export class SwcarouselComponent {

}
