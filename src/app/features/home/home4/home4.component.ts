import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-home4',
    templateUrl: './home4.component.html',
    styleUrls: ['./home4.component.scss'],
    imports: [CommonModule,RouterLink,FooterComponent,HeaderComponent,CarouselModule],
})
export class Home4Component {
  public routes = routes;

}
