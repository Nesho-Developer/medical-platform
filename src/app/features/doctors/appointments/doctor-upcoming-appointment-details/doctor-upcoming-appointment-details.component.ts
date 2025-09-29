import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { DoctorSidebarComponent } from '../../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../../common/doctor-breadcrumb/doctor-breadcrumb.component';

@Component({
    selector: 'app-doctor-upcoming-appointment-details',
    templateUrl: './doctor-upcoming-appointment-details.component.html',
    styleUrls: ['./doctor-upcoming-appointment-details.component.scss'],
    imports:[CommonModule,FormsModule,RouterLink,DoctorSidebarComponent,DoctorBreadcrumbComponent]
})
export class DoctorUpcomingAppointmentDetailsComponent {
  public routes = routes;
}
