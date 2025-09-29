import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../../../shared/common/common.service';
import { DataService } from '../../../../../shared/data/data.service';
import { header } from '../../../../../shared/model/sidebar-model';
import { routes } from '../../../../../shared/routes/routes';
import { SidebarService } from '../../../../../shared/sidebar/sidebar.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule,RouterLink,MatSelectModule,RouterLinkActive],
})
export class HeaderComponent {
  public white_bg = false;
  public searchField  = false;
  public routes = routes;
  public header: header[];
  base = '';
  page = '';
  last = '';
  isMenuOpened=false;
  isdark=true;
  islight=false;
  themeColor = 'light-mode';
  isDropdownOpen=false;
  openDropdownIndex: number | null = null;
  constructor(
    private common: CommonService,
    private data: DataService,
    public sidebar: SidebarService,
    private router: Router
  ) {
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
  
public toggleSidebar(): void {
    this.sidebar.openSidebar();
    this.isMenuOpened=true;
    document.body.style.overflow='hidden'
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
    this.isMenuOpened=false;
    document.body.style.overflow=''
  }
  toggleSubMenu(index: number): void {
    // If the clicked menu is already open, close it
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    this.isDropdownOpen=false;
  }
  toggleSearch(){
    this.searchField = !this.searchField
  }
  public navigation() {
    this.router.navigate([routes.search1]);
  }
  @HostListener('window:scroll', ['$event'])
  sticky = false;
  elementPosition = 0;
  handleScroll() {
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
  
  ngOnInit(): void {
    const themeColor = localStorage.getItem('themeColor') || 'light-mode';
    this.sidebar.changeThemeColor(themeColor);
  }
  darkMode():void{
    this.isdark=!this.isdark;
    this.islight=!this.islight;
  }
}
