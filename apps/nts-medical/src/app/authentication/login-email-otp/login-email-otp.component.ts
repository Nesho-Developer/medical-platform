
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-login-email-otp',
    templateUrl: './login-email-otp.component.html',
    styleUrls: ['./login-email-otp.component.scss'],
    imports: [RouterLink]
})
export class LoginEmailOtpComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.emailOtp]);
  }
}
