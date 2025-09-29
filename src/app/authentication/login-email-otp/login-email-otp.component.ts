import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/routes/routes';
@Component({
    selector: 'app-login-email-otp',
    templateUrl: './login-email-otp.component.html',
    styleUrls: ['./login-email-otp.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class LoginEmailOtpComponent {
  public routes = routes;
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.emailOtp]);
  }
}
