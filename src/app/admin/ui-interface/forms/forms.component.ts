import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
    imports: [CommonModule, RouterModule]
})
export class FormsComponent {
  public routes = routes;

}
