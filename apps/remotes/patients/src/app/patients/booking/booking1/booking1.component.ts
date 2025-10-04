import { Component, inject, OnDestroy, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonService, routes } from '@nts/shared';
import { PatientBreadcrumbComponent } from '../../common/patient-breadcrumb/patient-breadcrumb.component';

@Component({
  selector: 'app-booking1',
  templateUrl: './booking1.component.html',
  styleUrls: ['./booking1.component.scss'],
  imports: [
    RouterLink,
    BsDatepickerModule,
    FormsModule,
    PatientBreadcrumbComponent,
  ],
})
export class Booking1Component implements OnDestroy {
  private common = inject(CommonService);
  private renderer = inject(Renderer2);

  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    if (this.last == 'booking1') {
      this.renderer.addClass(document.body, 'date-pickers');
    }
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'date-pickers');
  }
}
