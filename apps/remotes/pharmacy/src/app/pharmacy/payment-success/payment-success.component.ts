
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-payment-success',
    templateUrl: './payment-success.component.html',
    styleUrls: ['./payment-success.component.scss'],
    imports: [RouterLink]
})
export class PaymentSuccessComponent {
  public routes = routes;

}
