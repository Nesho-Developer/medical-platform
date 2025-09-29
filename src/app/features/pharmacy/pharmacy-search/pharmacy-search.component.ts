import { CommonModule } from '@angular/common';
    import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
    selector: 'app-pharmacy-search',
    templateUrl: './pharmacy-search.component.html',
    styleUrls: ['./pharmacy-search.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class PharmacySearchComponent {
  public routes = routes;

}
