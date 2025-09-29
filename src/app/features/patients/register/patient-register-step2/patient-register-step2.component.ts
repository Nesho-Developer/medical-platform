import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-patient-register-step2',
    templateUrl: './patient-register-step2.component.html',
    styleUrls: ['./patient-register-step2.component.scss'],
    imports: [CommonModule, RouterLink,FormsModule],

})
export class PatientRegisterStep2Component {
  public routes = routes;
  displayStyle = 'none';
  selectedOption = 'Male';

  toggleDisplay() {
    this.displayStyle = this.displayStyle === 'none' ? 'block' : 'none';
  }

}
