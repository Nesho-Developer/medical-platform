import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../shared/routes/routes';
import intlTelInput from 'intl-tel-input';
@Component({
    selector: 'app-login-phone',
    templateUrl: './login-phone.component.html',
    styleUrls: ['./login-phone.component.scss'],
    imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule]
})
export class LoginPhoneComponent {
  private router = inject(Router);

  public routes = routes;
  public togglePasswordClass = false;
  public selectedFieldSet = [0];

  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });

  togglePassword() {
    this.togglePasswordClass = !this.togglePasswordClass;
  }

  public navigation() {
    this.router.navigate([routes.loginPhoneOtp]);
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
