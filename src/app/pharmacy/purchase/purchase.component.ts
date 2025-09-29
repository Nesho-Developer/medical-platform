import { Component } from '@angular/core';
import { routes } from '../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
  @Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss'],
    imports: [CommonModule,RouterModule]
})
export class PurchaseComponent {
  public routes = routes;

}
