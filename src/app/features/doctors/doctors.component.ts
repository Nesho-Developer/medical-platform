import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
    selector: 'app-doctors',
    templateUrl: './doctors.component.html',
    styleUrls: ['./doctors.component.scss'],
    imports:[CommonModule,RouterModule]
})
export class DoctorsComponent {
  public routes = routes;

}
