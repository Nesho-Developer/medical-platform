
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
import intlTelInput from 'intl-tel-input';
@Component({
    selector: 'app-patient-signup',
    templateUrl: './patient-signup.component.html',
    styleUrls: ['./patient-signup.component.scss'],
    imports: [RouterLink, FormsModule, ReactiveFormsModule]
})
export class PatientSignupComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.signupSuccess]);
  }
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });
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
