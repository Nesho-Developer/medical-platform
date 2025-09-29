import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
@Component({
    selector: 'app-error500',
    templateUrl: './error500.component.html',
    styleUrls: ['./error500.component.scss'],
    imports: [RouterLink,CommonModule]
})
export class Error500Component {
  public routes = routes;

}
