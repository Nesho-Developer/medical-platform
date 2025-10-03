import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { routes } from '@nts/shared';
import { CommonService } from '@nts/shared';
import { NavigationStart, Router, Event as RouterEvent, RouterModule } from '@angular/router';
import { url } from '@nts/shared';
import * as Aos from 'aos';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarService } from '@nts/shared';
@Component({
  selector: 'app-features',
  imports: [CommonModule,RouterModule,HeaderComponent,FooterComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  private common = inject(CommonService);
  private router = inject(Router);
  private elementRef = inject(ElementRef);
  private sidebar = inject(SidebarService);

  public routes = routes;
  public footerActive = false;
  public headerActive = false;
  public base = '';
  public page = '';
  public last = '';
  isMenuOpened=false;
  // Scroll to the top of the page
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  constructor() {
    const router = this.router;

    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
        this.scrollToTop();
        document.body.style.overflow=''
      }
    });
    this.common.base.subscribe((base : string) => {
      this.base = base;
    })
    this.common.page.subscribe((page : string) => {
      this.page = page;
    })
    this.common.last.subscribe((last : string) => {
      this.last = last;
    })
    this.getRoutes(this.router);
  }

  public getRoutes(events: url) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      events.url.split('/')[1] === 'home1' ||
      events.url.split('/')[1] === 'home2' ||
      events.url.split('/')[1] === 'home3' ||
      events.url.split('/')[1] === 'home4' ||
      events.url.split('/')[1] === 'home5' ||
      events.url.split('/')[1] === 'home6' ||
      events.url.split('/')[1] === 'home7' ||
      events.url.split('/')[1] === 'home8' ||
      events.url.split('/')[1] === 'home9' ||
      events.url.split('/')[1] === 'home10'||
      events.url.split('/')[1] === 'home11'||
      events.url.split('/')[1] === 'home13'||
      events.url.split('/')[1] === 'home14'||
      events.url.split('/')[2] === 'pharmacy-index' ||
      events.url.split('/')[1] === 'home12'
    ) {
      this.footerActive = false;
      this.headerActive = false;
    } else {
      this.footerActive = true;
      this.headerActive = true;
    }
  }
  ngOnInit(): void {
    Aos.init({
      duration: 1500,
      once: true,
    });

  }
  @ViewChild('cursorOuter', { static: false }) cursorOuter!: ElementRef;
  @ViewChild('cursorInner', { static: false }) cursorInner!: ElementRef;

  private cursorInnerElement!: HTMLElement;
  private cursorOuterElement!: HTMLElement;


  ngAfterViewInit(): void {
    this.cursorInnerElement = this.cursorInner.nativeElement;
    this.cursorOuterElement = this.cursorOuter.nativeElement;
    this.initCursor();
  }

  private initCursor(): void {
    const body = document.body;

    body.addEventListener('mousemove', (event: MouseEvent) => {
      this.cursorOuterElement.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      this.cursorInnerElement.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });

    const cursorPointerElements = this.elementRef.nativeElement.querySelectorAll('a, .cursor-pointer');

    cursorPointerElements.forEach((element: HTMLElement) => {
      element.addEventListener('mouseenter', () => {
        this.cursorInnerElement.classList.add('cursor-hover');
        this.cursorOuterElement.classList.add('cursor-hover');
      });

      element.addEventListener('mouseleave', () => {
        if (!(element.tagName === 'A' && element.closest('.cursor-pointer'))) {
          this.cursorInnerElement.classList.remove('cursor-hover');
          this.cursorOuterElement.classList.remove('cursor-hover');
        }
      });
    });

    this.cursorInnerElement.style.visibility = 'visible';
    this.cursorOuterElement.style.visibility = 'visible';
  }

}
