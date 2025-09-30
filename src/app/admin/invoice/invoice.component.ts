import { Component } from '@angular/core';
import { routes } from '../../shared/routes/routes';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
    imports: []
})
export class InvoiceComponent {
  public routes = routes;

}
