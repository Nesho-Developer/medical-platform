import { CommonModule } from '@angular/common';
  import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonService } from '../../../shared/common/common.service';
import { DataService } from '../../../shared/data/data.service';
import { header } from '../../../shared/model/sidebar-model';
import { routes } from '../../../shared/routes/routes';
import { SidebarService } from '../../../shared/sidebar/sidebar.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [CommonModule,RouterLink,RouterLinkActive],
})
export class HeaderComponent {
  public searchField  = false;
  public routes = routes;
  public header: header[];
  base = '';
  page = '';
  last = '';
  isSearch=false;
  isdark=true;
  islight=false;
  overlay = false;
  themeColor = 'light-mode';
  isDropdownOpen=false;
  openDropdownIndex: number | null = null;
  constructor(
    private common: CommonService,
    private data: DataService,
    public sidebar: SidebarService,
    private router: Router,
  ) {
    
    this.common.base.subscribe((res: string) => {
      this.base = res;
      this.overlay = false;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
      this.overlay = false;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
      this.overlay = false;
    });
    this.header = this.data.header;
  }
  public toggleSidebar(): void {
    this.sidebar.openSidebar();
    this.overlay = true;
    document.body.style.overflow='hidden'
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
    this.overlay = false;
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
  openSearch():void{
    this.isSearch=!this.isSearch;
  }
  public navigation() {
    this.router.navigate([routes.search1]);
  }

 @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const headerOne = document.querySelector('.header-one');
    if (headerOne && scroll > 35) {
      headerOne.classList.add('header-space');
    } else if (headerOne) {
      headerOne.classList.remove('header-space');
    }

    const headerTen = document.querySelector('.header-ten');
    if (headerTen && scroll > 35) {
      headerTen.classList.add('header-space');
    } else if (headerTen) {
      headerTen.classList.remove('header-space');
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

  onSubmit():void{
    this.router.navigateByUrl('/search-doctor/search1');
  }
  navigate():void{
    this.router.navigate([routes.search1]);
  }
}
