import { CommonModule } from '@angular/common';
  import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonService } from '../../../../shared/common/common.service';
import { routes } from '../../../../shared/routes/routes';

@Component({
    selector: 'app-patient-sidebar',
    templateUrl: './patient-sidebar.component.html',
    styleUrls: ['./patient-sidebar.component.scss'],
    imports:[CommonModule,RouterLink,RouterLinkActive]
})
export class PatientSidebarComponent {
  private common = inject(CommonService);

  public routes = routes
  public base = '';
  public page = '';
  public last = '';

  constructor() {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
  }
}
