
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/routes/routes';

@Component({
    selector: 'app-forgot-password2',
    templateUrl: './forgot-password2.component.html',
    styleUrls: ['./forgot-password2.component.scss'],
    imports: [RouterLink]
})
export class ForgotPassword2Component {
  private router = inject(Router);

  public routes = routes;

  navigation() {
    this.router.navigate([routes.loginEmail]);
  }
}
