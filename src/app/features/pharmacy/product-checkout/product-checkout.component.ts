import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
    selector: 'app-product-checkout',
    templateUrl: './product-checkout.component.html',
    styleUrls: ['./product-checkout.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class ProductCheckoutComponent {
  public routes = routes;
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.paymentSuccess]);
  }
}
