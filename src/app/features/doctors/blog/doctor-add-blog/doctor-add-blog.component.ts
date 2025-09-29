import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DoctorSidebarComponent } from '../../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../../common/doctor-breadcrumb/doctor-breadcrumb.component';
import { routes } from '../../../../shared/routes/routes';
@Component({
    selector: 'app-doctor-add-blog',
    templateUrl: './doctor-add-blog.component.html',
    styleUrls: ['./doctor-add-blog.component.scss'],
    imports:[CommonModule,FormsModule,RouterLink,DoctorSidebarComponent,DoctorBreadcrumbComponent]
})
export class DoctorAddBlogComponent {
  public routes = routes;
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.doctorBlog]);
  }
}
