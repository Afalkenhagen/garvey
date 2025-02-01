import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component'; 
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  
}
