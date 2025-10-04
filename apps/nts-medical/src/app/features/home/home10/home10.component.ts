import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { routes } from '@nts/shared';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from '@nts/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-home10',
  templateUrl: './home10.component.html',
  styleUrls: ['./home10.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    RouterLink,
    FooterComponent,
    HeaderComponent,
    CarouselModule,
    SlickCarouselModule,
    CountUpModule,
    LightgalleryModule,
  ],
})
export class Home10Component implements AfterViewChecked {
  public routes = routes;
  public isClassAdded: boolean[] = [false];
  public doctorSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
  public pharmacySliderOptions: OwlOptions = {
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
  public frequentSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: true,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
  public slideConfig = {
    dots: true,
    arrows: true,
    autoplay: false,
    centerMode: true,
    infinite: true,
    rows: 0,
    slidesToShow: 3,
    vertical: true,
    horizontalSwiping: true,
  };
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  public popularChoiceSlider: OwlOptions = {
    loop: false,
    margin: 15,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-play"></i>',
      '<i class="fa-solid fa-play"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };
}
