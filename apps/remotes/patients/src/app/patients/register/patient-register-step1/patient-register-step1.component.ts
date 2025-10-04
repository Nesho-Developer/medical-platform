import { Component } from '@angular/core';
import { routes } from '@nts/shared';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-patient-register-step1',
    templateUrl: './patient-register-step1.component.html',
    styleUrls: ['./patient-register-step1.component.scss'],
    imports: [RouterLink, FormsModule]
})
export class PatientRegisterStep1Component {
  public routes = routes

}
