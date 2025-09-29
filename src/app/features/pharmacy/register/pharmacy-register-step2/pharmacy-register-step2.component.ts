import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
    selector: 'app-pharmacy-register-step2',
    templateUrl: './pharmacy-register-step2.component.html',
    styleUrls: ['./pharmacy-register-step2.component.scss'],
        imports:[CommonModule,RouterLink]
})
export class PharmacyRegisterStep2Component {
  public routes = routes;

}
