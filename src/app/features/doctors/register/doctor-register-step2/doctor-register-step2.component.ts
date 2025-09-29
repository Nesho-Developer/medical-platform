import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-doctor-register-step2',
    templateUrl:   './doctor-register-step2.component.html',
    styleUrls: ['./doctor-register-step2.component.scss'],
    imports:[CommonModule,FormsModule,RouterLink]
})
export class DoctorRegisterStep2Component {
  public routes = routes;
  displayStyle = 'none';

  toggleDisplay() {
    this.displayStyle = this.displayStyle === 'none' ? 'block' : 'none';
  }
}
