import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/routes/routes';
@Component({
    selector: 'app-login-email',
    templateUrl: './login-email.component.html',
    styleUrls: ['./login-email.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class LoginEmailComponent {
  private router = inject(Router);

  public routes = routes;
  public togglePasswordClass = false;

  public navigation() {
    this.router.navigate([routes.loginEmailOtp]);
  }
  togglePassword() {
    this.togglePasswordClass = !this.togglePasswordClass;
  }
}
