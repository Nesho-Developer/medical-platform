import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
import { DoctorSidebarComponent } from '../../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../../common/doctor-breadcrumb/doctor-breadcrumb.component';
@Component({
    selector: 'app-doctor-blog',
    templateUrl: './doctor-blog.component.html',
    styleUrls: ['./doctor-blog.component.scss'],
    imports:[CommonModule,FormsModule,RouterLink,DoctorSidebarComponent,DoctorBreadcrumbComponent]
})
export class DoctorBlogComponent {
  public routes = routes;

}
