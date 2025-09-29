import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-vertical',
    templateUrl: './form-vertical.component.html',
    styleUrls: ['./form-vertical.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class FormVerticalComponent {
  public routes = routes;
}
