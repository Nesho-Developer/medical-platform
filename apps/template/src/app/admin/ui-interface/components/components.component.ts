import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
    imports: [RouterLink]
})
export class ComponentsComponent {
  public routes = routes;
}
