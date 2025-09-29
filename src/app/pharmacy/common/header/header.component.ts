import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
import { SidebarService } from '../../../shared/sidebar/sidebar.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class HeaderComponent {
  public routes = routes;
  public miniSidebar = false;

  constructor(public router: Router,private sidebar: SidebarService) {
    this.sidebar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }
  public toggleAdminSideBar(): void {
    this.sidebar.switchAdminSideMenuPosition();
  }
  public toggleAdminMobileSideBar(): void {
    this.sidebar.switchAdminMobileSideBarPosition();
  }
}
