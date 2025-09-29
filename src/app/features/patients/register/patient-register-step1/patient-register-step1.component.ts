import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-patient-register-step1',
    templateUrl: './patient-register-step1.component.html',
    styleUrls: ['./patient-register-step1.component.scss'],
    imports: [CommonModule, RouterLink,FormsModule]
})
export class PatientRegisterStep1Component {
  public routes = routes

}
