import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-pharmacy-register-step3',
    templateUrl: './pharmacy-register-step3.component.html',
    styleUrls: ['./pharmacy-register-step3.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class PharmacyRegisterStep3Component {
  public routes = routes;
  displayStyle = 'none';

  toggleDisplay() {
    this.displayStyle = this.displayStyle === 'none' ? 'block' : 'none';
    // console.log('aaa', this.displayStyle);
  }
}
