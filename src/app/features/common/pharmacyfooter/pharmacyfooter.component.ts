    import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-pharmacyfooter',
    templateUrl: './pharmacyfooter.component.html',
    styleUrls: ['./pharmacyfooter.component.scss'],
    imports: [CommonModule,RouterLink],
})
export class PharmacyfooterComponent {
  public routes = routes

}
