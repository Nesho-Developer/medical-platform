import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  CommonService,
  DataService,
  header,
  routes,
  SidebarService,
} from '@nts/shared';

@Component({
  selector: 'app-pharmacyheader',
  templateUrl: './pharmacyheader.component.html',
  styleUrls: ['./pharmacyheader.component.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class PharmacyheaderComponent {
  sidebar = inject(SidebarService);
  public routes = routes;
  public searchField = false;
  public header: header[];
  base = '';
  page = '';
  last = '';
  public white_bg = false;
  sticky = false;
  elementPosition = 0;
  isdark = true;
  islight = false;
  themeColor = 'light-mode';
  private common = inject(CommonService);
  private data = inject(DataService);
  private router = inject(Router);

  constructor() {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(_: Event) {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
    if (windowScroll == 0) {
      this.white_bg = false;
    } else {
      this.white_bg = true;
    }
  }

  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }
  toggleSearch() {
    this.searchField = !this.searchField;
  }
  public navigation() {
    this.router.navigate([routes.search1]);
  }
  ngOnInit(): void {
    const themeColor = localStorage.getItem('themeColor') || 'light-mode';
    this.sidebar.changeThemeColor(themeColor);
  }
  darkMode(): void {
    this.isdark = !this.isdark;
    this.islight = !this.islight;
  }
}
