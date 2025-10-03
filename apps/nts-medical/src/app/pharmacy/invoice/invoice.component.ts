import { Component } from '@angular/core';
import { routes } from '@nts/shared';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
    standalone: false
})
export class InvoiceComponent {
  public routes = routes;

}
