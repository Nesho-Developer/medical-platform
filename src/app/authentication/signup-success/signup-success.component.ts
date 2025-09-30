import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../shared/routes/routes';
@Component({
    selector: 'app-signup-success',
    templateUrl: './signup-success.component.html',
    styleUrls: ['./signup-success.component.scss'],
    standalone: false
})
export class SignupSuccessComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.loginEmail]);
  }
}
