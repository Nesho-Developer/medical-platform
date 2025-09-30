
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
    imports: [RouterLink]
})
export class PricingComponent {
  public routes = routes;

}
