import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-patient-register-step3',
    templateUrl: './patient-register-step3.component.html',
    styleUrls: ['./patient-register-step3.component.scss'],
    imports: [CommonModule, RouterLink,FormsModule],
})
export class PatientRegisterStep3Component {
  public routes = routes;
  public cartValue = [0];
  public addPos(i: number): void {
    this.cartValue[i]++;
  }
  public reducePos(i: number): void {
    this.cartValue[i]--;
  }

}
