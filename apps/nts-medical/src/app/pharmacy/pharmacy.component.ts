import { Component, ViewEncapsulation, inject } from '@angular/core';
import { Router, NavigationStart, Event as RouterEvent } from '@angular/router';
import { CommonService } from '@nts/shared';
import { routes } from '@nts/shared';
import { url } from '@nts/shared';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
@Component({
    selector: 'app-pharmacy',
    templateUrl: './pharmacy.component.html',
    styleUrls: ['./pharmacy.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule,RouterModule,SidebarComponent,HeaderComponent]
})
export class PharmacyComponent {
  private common = inject(CommonService);
  private router = inject(Router);

  public routes = routes;
  public sidebarActive = false;
  public headerActive = false;

  constructor() {
    const router = this.router;

    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.overflow = '';
        document.querySelector('.sidebar-overlay.opened')?.classList.remove('opened');
      }
    });
    this.getRoutes(this.router);
  }

  public getRoutes(events: url) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      events.url.split('/')[2] === 'pharmacy-login' ||
      events.url.split('/')[2] === 'pharmacy-forgot-password' ||
      events.url.split('/')[2] === 'lock-screen' ||
      events.url.split('/')[2] === 'pharmacy-register' ||
      events.url.split('/')[2] === 'errors'
    ) {
      this.sidebarActive = false;
      this.headerActive = false;
    } else {
      this.sidebarActive = true;
      this.headerActive = true;
    }
  }
}
