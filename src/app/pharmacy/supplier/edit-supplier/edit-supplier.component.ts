import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-edit-supplier',
    templateUrl: './edit-supplier.component.html',
    styleUrls: ['./edit-supplier.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class EditSupplierComponent {
  public routes = routes;

}
