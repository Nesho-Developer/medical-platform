
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../shared/routes/routes';
import { DoctorSidebarComponent } from '../../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../../common/doctor-breadcrumb/doctor-breadcrumb.component';
@Component({
    selector: 'app-edit-blog',
    templateUrl: './edit-blog.component.html',
    styleUrls: ['./edit-blog.component.scss'],
    imports: [FormsModule, RouterLink, DoctorSidebarComponent, DoctorBreadcrumbComponent]
})
export class EditBlogComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.doctorBlog]);
  }
}
