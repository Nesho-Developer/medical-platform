
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    imports: [RouterLink]
})
export class ForgotPasswordComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.adminLogin]);
  }
}
