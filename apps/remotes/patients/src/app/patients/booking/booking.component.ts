import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@nts/shared';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  imports: [RouterModule],
})
export class BookingComponent {
  public routes = routes;
}
