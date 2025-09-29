import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { PatientSidebarComponent } from '../../common/patient-sidebar/patient-sidebar.component';
import { PatientBreadcrumbComponent } from '../../common/patient-breadcrumb/patient-breadcrumb.component';

@Component({
    selector: 'app-patient-upcoming-appointment',
    templateUrl: './patient-upcoming-appointment.component.html',
    styleUrls: ['./patient-upcoming-appointment.component.scss'],
    imports:[CommonModule,RouterLink,PatientSidebarComponent,PatientBreadcrumbComponent]
})
export class PatientUpcomingAppointmentComponent {
  public routes = routes;
}
