import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    imports:[RouterModule]
})
export class RegisterComponent {
  public routes = routes;

}
