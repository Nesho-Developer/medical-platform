
import { Component, Renderer2, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../../../shared/routes/routes';
import { DoctorSidebarComponent } from '../common/doctor-sidebar/doctor-sidebar.component';
import { DoctorBreadcrumbComponent } from '../common/doctor-breadcrumb/doctor-breadcrumb.component';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    imports: [FormsModule, DoctorSidebarComponent, DoctorBreadcrumbComponent, MatSelectModule, BsDatepickerModule]
})
export class ReviewsComponent {
  private renderer = inject(Renderer2);

  public routes = routes;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];

  }
  ngOnInit(): void {
    this.renderer.addClass(document.body, 'custom-daterangepicker')  ;
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'custom-daterangepicker')  ;
  }
}
