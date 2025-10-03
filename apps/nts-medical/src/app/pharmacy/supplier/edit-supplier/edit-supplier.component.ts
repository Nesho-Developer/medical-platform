import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';


@Component({
    selector: 'app-edit-supplier',
    templateUrl: './edit-supplier.component.html',
    styleUrls: ['./edit-supplier.component.scss'],
    imports: [RouterLink]
})
export class EditSupplierComponent {
  public routes = routes;

}
