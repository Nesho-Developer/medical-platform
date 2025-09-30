import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../shared/routes/routes';
@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
    imports: [RouterModule]
})
export class ErrorComponent {
  public routes = routes;

}
