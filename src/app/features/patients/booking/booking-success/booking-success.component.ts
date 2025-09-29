import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
import { PatientBreadcrumbComponent } from '../../common/patient-breadcrumb/patient-breadcrumb.component';
@Component({
    selector: 'app-booking-success',
    templateUrl: './booking-success.component.html',
    styleUrls: ['./booking-success.component.scss'],
    imports:[CommonModule,RouterLink,PatientBreadcrumbComponent]
})
export class BookingSuccessComponent {
  public routes = routes;

}
