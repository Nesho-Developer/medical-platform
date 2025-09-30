import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
import intlTelInput from 'intl-tel-input';
@Component({
    selector: 'app-doctor-register',
    templateUrl: './doctor-register.component.html',
    styleUrls: ['./doctor-register.component.scss'],
    imports:[CommonModule,FormsModule,RouterLink]
})
export class DoctorRegisterComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.doctorRegisterStep1]);
  }

  public togglePasswordClass = false;
  togglePassword() {
    this.togglePasswordClass = !this.togglePasswordClass;
  }
  ngAfterViewInit(): void {
    const input = document.querySelector('#phone') as HTMLInputElement;
    intlTelInput(input, {
      initialCountry: 'us',
      preferredCountries: ['us', 'gb', 'in'],
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
    }as any);
    // Restrict input to numbers, "+", and allowed characters
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^0-9+()-\s]/g, ''); // Removes any character not allowed
    });

  }
}
