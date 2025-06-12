import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component'; 
import { HeroComponent } from '../hero/hero.component';
import { FactsComponent } from '../facts/facts.component';
import { AboutComponent } from '../about/about.component';
import { FeatureComponent } from "../feature/feature.component";


@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselComponent, HeroComponent, FactsComponent, AboutComponent, FeatureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  
}
