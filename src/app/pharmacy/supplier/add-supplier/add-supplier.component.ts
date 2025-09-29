import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-add-supplier',
    templateUrl: './add-supplier.component.html',
    styleUrls: ['./add-supplier.component.scss'],
    imports: [CommonModule,RouterLink]
  })
export class AddSupplierComponent {
  public routes = routes;

}
