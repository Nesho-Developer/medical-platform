import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonService } from '../../../../shared/common/common.service';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-breadcrumb-search',
  templateUrl: './breadcrumb-search.component.html',
  styleUrls: ['./breadcrumb-search.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule,BsDatepickerModule]
})
export class BreadcrumbSearchComponent {
private common = inject(CommonService);
private router = inject(Router);

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
onSubmit() : void{
  this.router.navigateByUrl('/patients/search-doctor/search1');
}
}
