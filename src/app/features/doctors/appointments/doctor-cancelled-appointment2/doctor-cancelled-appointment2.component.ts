import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
import { DoctorSidebarComponent } from '../../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../../common/doctor-breadcrumb/doctor-breadcrumb.component';

@Component({
    selector: 'app-doctor-cancelled-appointment2',
    templateUrl: './doctor-cancelled-appointment2.component.html',
    styleUrls: ['./doctor-cancelled-appointment2.component.scss'],
    imports:[CommonModule,FormsModule,RouterLink,DoctorSidebarComponent,DoctorBreadcrumbComponent]
})
export class DoctorCancelledAppointment2Component {
  public routes = routes

}
