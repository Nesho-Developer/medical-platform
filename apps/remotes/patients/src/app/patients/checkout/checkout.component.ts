
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
import { PatientBreadcrumbComponent } from '../common/patient-breadcrumb/patient-breadcrumb.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
    imports: [RouterLink, PatientBreadcrumbComponent, CarouselModule]
})
export class CheckoutComponent {
  private router = inject(Router);

  public routes = routes;

  public navigation() {
    this.router.navigate([routes.bookingSuccess]);
  }
}
