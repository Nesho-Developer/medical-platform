import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-validation',
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.scss'],
    imports: [RouterLink]
})
export class FormValidationComponent {
  public routes = routes;
}
