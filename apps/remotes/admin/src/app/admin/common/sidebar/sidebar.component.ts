import { Component, inject } from '@angular/core';
import { CommonService } from '@nts/shared';
import { DataService } from '@nts/shared';
import { adminSidebar } from '@nts/shared';
import { SidebarService } from '@nts/shared';
import { routes } from '@nts/shared';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgScrollbarModule } from 'ngx-scrollbar';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [CommonModule,RouterLink,NgScrollbarModule,RouterLinkActive]
})
export class SidebarComponent {
  private sidebar = inject(SidebarService);
  private common = inject(CommonService);
  private data = inject(DataService);

  public routes = routes;
  base = '';
  page = '';
  last = '';
  public adminSidebar: Array<adminSidebar> = [];
  public miniSidebar = false;
  public multilevel: Array<boolean> = [false, false, false];

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
    this.adminSidebar = this.data.adminSidebar;
    this.sidebar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
  }
  public expandSubMenus(menu: {
    menuValue: string;
    showSubRoute: boolean;
  }): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.adminSidebar.map((mainMenus) => {
      mainMenus.menu.map(
        (resMenu: { menuValue: string; showSubRoute: boolean }) => {
          if (resMenu.menuValue == menu.menuValue) {
            menu.showSubRoute = !menu.showSubRoute;
          } else {
            resMenu.showSubRoute = false;
          }
        }
      );
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
  miniSideBarBlur(position: string) {
    if (position === 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  miniSideBarFocus(position: string) {
    if (position === 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }
}
