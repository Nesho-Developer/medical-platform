
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-pharmacy-register',
    templateUrl: './pharmacy-register.component.html',
    styleUrls: ['./pharmacy-register.component.scss'],
    imports: [RouterLink]
})
export class PharmacyRegisterComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.pharmacyRegisterStep1]);
  }
}
