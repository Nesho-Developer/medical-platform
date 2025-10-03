
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-terms-condition',
    templateUrl: './terms-condition.component.html',
    styleUrls: ['./terms-condition.component.scss'],
    imports: [RouterLink]
})
export class TermsConditionComponent {
  public routes = routes;

}
