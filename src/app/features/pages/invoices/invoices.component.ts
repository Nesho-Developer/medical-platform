import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
@Component({
    selector: 'app-invoices',
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.scss'],
    imports: [RouterModule]
})
export class InvoicesComponent {
  public routes = routes;

}
