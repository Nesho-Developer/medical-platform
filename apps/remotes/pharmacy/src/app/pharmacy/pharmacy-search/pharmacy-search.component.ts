
    import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-pharmacy-search',
    templateUrl: './pharmacy-search.component.html',
    styleUrls: ['./pharmacy-search.component.scss'],
    imports: [RouterLink]
})
export class PharmacySearchComponent {
  public routes = routes;

}
