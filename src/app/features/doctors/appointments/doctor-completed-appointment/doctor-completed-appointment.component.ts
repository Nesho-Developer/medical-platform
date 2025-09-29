import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
import { DoctorSidebarComponent } from '../../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../../common/doctor-breadcrumb/doctor-breadcrumb.component';

@Component({
    selector: 'app-doctor-completed-appointment',
    templateUrl: './doctor-completed-appointment.component.html',
    styleUrls: ['./doctor-completed-appointment.component.scss'],
    imports:[CommonModule,FormsModule,RouterLink,DoctorSidebarComponent,DoctorBreadcrumbComponent]
})
export class DoctorCompletedAppointmentComponent {
  public routes = routes

}
