import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { PatientSidebarComponent } from '../../common/patient-sidebar/patient-sidebar.component';
import { PatientBreadcrumbComponent } from '../../common/patient-breadcrumb/patient-breadcrumb.component';

@Component({
    selector: 'app-patient-cancelled-appointment',
    templateUrl: './patient-cancelled-appointment.component.html',
    styleUrls: ['./patient-cancelled-appointment.component.scss'],
    imports:[CommonModule,RouterLink,PatientSidebarComponent,PatientBreadcrumbComponent]
})
export class PatientCancelledAppointmentComponent {
  public routes = routes

}
