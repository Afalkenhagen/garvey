import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component'; 
import { HeroComponent } from '../hero/hero.component';
import { FactsComponent } from '../facts/facts.component';
import { AboutComponent } from '../about/about.component';
import { FeatureComponent } from "../feature/feature.component";
import { SwcarouselComponent } from '../swcarousel/swcarousel.component';
import { ObserveVisibilityDirective } from '../../directives/observe-visibility.directive';


@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroComponent, FactsComponent, AboutComponent, FeatureComponent, SwcarouselComponent, ObserveVisibilityDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  
}
