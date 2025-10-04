
import { Component } from '@angular/core';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-add-dependent',
    templateUrl: './add-dependent.component.html',
    styleUrls: ['./add-dependent.component.scss'],
    imports: []
})
export class AddDependentComponent {
  public routes = routes;

}
