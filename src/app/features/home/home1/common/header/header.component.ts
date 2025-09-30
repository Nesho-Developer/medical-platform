import { Component, HostListener, Renderer2, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonService } from '../../../../../shared/common/common.service';
import { DataService } from '../../../../../shared/data/data.service';
import { header } from '../../../../../shared/model/sidebar-model';
import { routes } from '../../../../../shared/routes/routes';
import { SidebarService } from '../../../../../shared/sidebar/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule,RouterLink,RouterLinkActive],
})
export class HeaderComponent {
  private common = inject(CommonService);
  private data = inject(DataService);
  sidebar = inject(SidebarService);
  private router = inject(Router);
  private renderer = inject(Renderer2);

  public searchField  = false;
  public routes = routes;
  public header: header[];
  base = '';
  page = '';
  last = '';
  isFixed = false;
  isSearch=false;
  isdark=true;
  islight=false;
  isMenuOpened=false;
  themeColor = 'light-mode';
  isDropdownOpen=false;
  openDropdownIndex: number | null = null;
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
    this.sidebar.themeColor.subscribe((res: string) => {
      this.themeColor = res;
    });
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

  toggleSearch(){
    this.searchField = !this.searchField
  }
  toggleSubMenu(index: number): void {
    // If the clicked menu is already open, close it
    this.openDropdownIndex = this.openDropdownIndex === index ? null : index;
    this.isDropdownOpen=false;
  }
  public navigation() {
    this.router.navigate([routes.search1]);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Add a fixed class when the scroll position is greater than 50px
    this.isFixed = window.pageYOffset > 50;
  }
  openSearch():void{
    this.isSearch=!this.isSearch;
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
