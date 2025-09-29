import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../shared/routes/routes';
@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss'],
    imports:[CommonModule,RouterModule]
})
export class DoctorsComponent {
  public routes = routes;

}
