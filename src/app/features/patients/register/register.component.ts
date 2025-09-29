import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    imports:[RouterModule]
})
export class RegisterComponent {
  public routes = routes;

}
