import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { DoctorSidebarComponent } from '../../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../../common/doctor-breadcrumb/doctor-breadcrumb.component';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-doctor-experience-settings',
    templateUrl: './doctor-experience-settings.component.html',
    styleUrl: './doctor-experience-settings.component.scss',
    imports:[CommonModule,FormsModule,RouterLink,DoctorSidebarComponent,DoctorBreadcrumbComponent,MatSelectModule,
      BsDatepickerModule
    ]
})
export class DoctorExperienceSettingsComponent {
  public routes = routes
  education: Array<number> = []

  addEducationFunc(){
    this.education.push(1);
  }
  deleteEducationFunc(index: number) {
    this.education.splice(index, 1); 
}

  
}
