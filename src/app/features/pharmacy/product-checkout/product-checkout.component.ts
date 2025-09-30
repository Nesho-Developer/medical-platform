
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
@Component({
    selector: 'app-product-checkout',
    templateUrl: './product-checkout.component.html',
    styleUrls: ['./product-checkout.component.scss'],
    imports: [RouterLink]
})
export class ProductCheckoutComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.paymentSuccess]);
  }
}
