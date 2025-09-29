import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-basic-inputs',
    templateUrl: './form-basic-inputs.component.html',
    styleUrls: ['./form-basic-inputs.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class FormBasicInputsComponent {
  public routes = routes;
}
