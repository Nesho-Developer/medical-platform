import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
    selector: 'app-form-mask',
    templateUrl: './form-mask.component.html',
    styleUrls: ['./form-mask.component.scss'],
    imports: [CommonModule, RouterLink,NgxMaskDirective]
})
export class FormMaskComponent {
  public routes = routes;
}
