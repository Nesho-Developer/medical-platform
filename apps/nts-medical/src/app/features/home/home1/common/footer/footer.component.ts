import { Component } from '@angular/core';
import { routes } from '@nts/shared';

import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [RouterLink, MatSelectModule],
})
export class FooterComponent {
  public routes = routes;

}
