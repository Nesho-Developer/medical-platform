
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss'],
    imports: [RouterLink]
})
export class ContactUsComponent {
  public routes = routes;

}
