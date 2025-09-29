import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-edit-dependent',
    templateUrl: './edit-dependent.component.html',
    styleUrls: ['./edit-dependent.component.scss'],
    imports:[CommonModule]
})
export class EditDependentComponent {
  public routes = routes;

}
