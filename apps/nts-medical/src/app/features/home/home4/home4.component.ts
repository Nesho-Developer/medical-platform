import { Component } from '@angular/core';
import { routes } from '@nts/shared';

import { FooterComponent, HeaderComponent } from '@nts/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss'],
  imports: [RouterLink, FooterComponent, HeaderComponent, CarouselModule],
})
export class Home4Component {
  public routes = routes;
}
