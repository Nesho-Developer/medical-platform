import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';


@Component({
    selector: 'app-add-supplier',
    templateUrl: './add-supplier.component.html',
    styleUrls: ['./add-supplier.component.scss'],
    imports: [RouterLink]
  })
export class AddSupplierComponent {
  public routes = routes;

}
