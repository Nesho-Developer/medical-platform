import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
    selector: 'app-booking-success-one',
    templateUrl: './booking-success-one.component.html',
    styleUrls: ['./booking-success-one.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class BookingSuccessOneComponent {
  public routes = routes;

}
