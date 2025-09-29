import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-lock-screen',
    templateUrl: './lock-screen.component.html',
    styleUrls: ['./lock-screen.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class LockScreenComponent {
  public routes = routes;
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.adminDashboard]);
  }
}
