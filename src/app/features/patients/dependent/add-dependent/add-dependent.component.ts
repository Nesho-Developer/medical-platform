import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-add-dependent',
    templateUrl: './add-dependent.component.html',
    styleUrls: ['./add-dependent.component.scss'],
    imports:[CommonModule]
})
export class AddDependentComponent {
  public routes = routes;

}
