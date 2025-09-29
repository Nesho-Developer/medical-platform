import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/routes/routes';

@Component({
    selector: 'app-forgot-password2',
    templateUrl: './forgot-password2.component.html',
    styleUrls: ['./forgot-password2.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class ForgotPassword2Component {
  public routes = routes;
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.loginEmail]);
  }
}
