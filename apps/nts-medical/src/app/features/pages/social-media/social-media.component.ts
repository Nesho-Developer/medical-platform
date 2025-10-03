
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
// import { DoctorSidebarComponent } from '../../doctors/common/doctor-sidebar/doctor-sidebar.component';

interface MedicalData {
  id: number;
}
@Component({
    selector: 'app-social-media',
    templateUrl: './social-media.component.html',
    styleUrls: ['./social-media.component.scss'],
    imports: [RouterLink, MatSelectModule,]
      // DoctorSidebarComponent]
})
export class SocialMediaComponent {
  public routes = routes;

  medical: Array<MedicalData> = [];

  addMedical() {
    const newRecord: MedicalData = {
      id: 1,
    };
    this.medical.push(newRecord);
  }
}
