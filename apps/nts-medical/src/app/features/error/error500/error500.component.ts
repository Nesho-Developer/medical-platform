
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-error500',
    templateUrl: './error500.component.html',
    styleUrls: ['./error500.component.scss'],
    imports: [RouterLink]
})
export class Error500Component {
  public routes = routes;

}
