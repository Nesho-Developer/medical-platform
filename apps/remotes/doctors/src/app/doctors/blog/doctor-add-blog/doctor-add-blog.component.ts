
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DoctorSidebarComponent } from '../../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../../common/doctor-breadcrumb/doctor-breadcrumb.component';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-doctor-add-blog',
    templateUrl: './doctor-add-blog.component.html',
    styleUrls: ['./doctor-add-blog.component.scss'],
    imports: [FormsModule, RouterLink, DoctorSidebarComponent, DoctorBreadcrumbComponent]
})
export class DoctorAddBlogComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.doctorBlog]);
  }
}
