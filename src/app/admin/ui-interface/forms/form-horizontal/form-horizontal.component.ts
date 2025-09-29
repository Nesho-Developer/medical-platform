import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-horizontal',
    templateUrl: './form-horizontal.component.html',
    styleUrls: ['./form-horizontal.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class FormHorizontalComponent {
  public routes = routes;
}
