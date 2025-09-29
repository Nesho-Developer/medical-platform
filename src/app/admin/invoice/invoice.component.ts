import { Component } from '@angular/core';
import { routes } from '../../shared/routes/routes';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss'],
    imports: [CommonModule]
})
export class InvoiceComponent {
  public routes = routes;

}
