import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-customer-orders',
    templateUrl: './customer-orders.component.html',
    styleUrls: ['./customer-orders.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class CustomerOrdersComponent {
  public routes = routes;

}
