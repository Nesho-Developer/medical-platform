
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '@nts/shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [RouterLink]
})
export class LoginComponent implements OnInit {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.adminDashboard]);
    localStorage.setItem('authenticated-admin', 'true');
  }
  ngOnInit(): void {
    if (
      localStorage.getItem('authenticated-admin') ||
      localStorage.getItem('authenticated-pharmacy')
    ) {
      localStorage.removeItem('authenticated-admin');
      localStorage.removeItem('authenticated-pharmacy');
    }
  }
}
