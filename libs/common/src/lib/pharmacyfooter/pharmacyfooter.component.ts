
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';

@Component({
    selector: 'app-pharmacyfooter',
    templateUrl: './pharmacyfooter.component.html',
    styleUrls: ['./pharmacyfooter.component.scss'],
    imports: [RouterLink],
})
export class PharmacyfooterComponent {
  public routes = routes

}
