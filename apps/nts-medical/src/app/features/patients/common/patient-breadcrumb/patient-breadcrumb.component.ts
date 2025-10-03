import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from '@nts/shared';
import { routes } from '@nts/shared';

@Component({
    selector: 'app-patient-breadcrumb',
    templateUrl: './patient-breadcrumb.component.html',
    styleUrls: ['./patient-breadcrumb.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class PatientBreadcrumbComponent {
  private common = inject(CommonService);

  public routes = routes;

  base = '';
  page = '';
  last = '';
  constructor() {
    this.common.base.subscribe((res: string) => {
      this.base = res?.replaceAll('-', ' ');
    });
    this.common.page.subscribe((res: string) => {
      if (res === 'chat') {
        this.page = 'Message';
      } else if (res === 'appointments') {
        this.page = 'Patient Appointments';
      } else if (res === 'patient-accounts') {
        this.page = 'Accounts';
      } else if (res === 'patient-invoice') {
        this.page = 'Invoices';
      } else {
        this.last = this.page;
        this.page = res?.replaceAll('-', ' ');
      }
    });
    this.common.last.subscribe((res: string) => {
      this.last = res?.replaceAll('-', ' ');
    });
  }
}
