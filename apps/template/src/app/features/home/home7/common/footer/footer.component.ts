import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [RouterLink],
})
export class FooterComponent {
  public routes = routes;

}
