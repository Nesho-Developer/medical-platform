import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
    selector: 'app-pharmacy-register-step1',
    templateUrl: './pharmacy-register-step1.component.html',
    styleUrls: ['./pharmacy-register-step1.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class PharmacyRegisterStep1Component {
  public routes = routes;

}
