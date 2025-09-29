import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-patient-register-step5',
    templateUrl: './patient-register-step5.component.html',
    styleUrls: ['./patient-register-step5.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class PatientRegisterStep5Component {
  public routes = routes;

}
