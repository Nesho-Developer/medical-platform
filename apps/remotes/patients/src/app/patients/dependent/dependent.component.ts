import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-dependent',
    templateUrl: './dependent.component.html',
    styleUrls: ['./dependent.component.scss'],
    imports:[RouterModule]
})
export class DependentComponent {
  public routes = routes;

}
