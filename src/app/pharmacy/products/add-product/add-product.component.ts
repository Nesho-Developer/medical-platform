import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss'],
    imports: [CommonModule,RouterLink,BsDatepickerModule]
})
export class AddProductComponent {
  public routes = routes;

}
