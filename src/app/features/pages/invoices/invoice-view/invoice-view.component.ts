
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-invoice-view',
    templateUrl: './invoice-view.component.html',
    styleUrls: ['./invoice-view.component.scss'],
    imports: [RouterLink]
})
export class InvoiceViewComponent {
  public routes = routes;

}
