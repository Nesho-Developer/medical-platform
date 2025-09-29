import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-doctor-register-step3',
    templateUrl: './doctor-register-step3.component.html',
    styleUrls: ['./doctor-register-step3.component.scss'],
    imports:[CommonModule,FormsModule,RouterLink]
})
export class DoctorRegisterStep3Component {
  public routes = routes;

}
