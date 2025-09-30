import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from '../../../shared/routes/routes';

import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSelectModule } from '@angular/material/select';
import { CountUpModule } from 'ngx-countup';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
    selector: 'app-home7',
    templateUrl: './home7.component.html',
    styleUrls: ['./home7.component.scss'],
    imports: [RouterLink, FooterComponent, HeaderComponent, CarouselModule, MatSelectModule, CountUpModule, BsDatepickerModule]
})
export class Home7Component implements OnInit{
  private router = inject(Router);

  
  public routes = routes;
  myDateValue!: Date ;
  date = new Date();
  public blogSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: ['<i class="fa-solid fa-caret-left "></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      575: {
        items: 2
      },
      768: {
        items: 2
      },
      1000: {
        items: 4
      },
      1200: {
        items: 4
      }
    }
  };
  public feedbackSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: ['<i class="fa-solid fa-caret-left "></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  };
  public blogSliderFourteen: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: ['<i class="fa-solid fa-caret-left "></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  };
  public partnersSliderOption: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1
      },

      550: {
        items: 1
      },
      700: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  };
  public feedbackOption: OwlOptions = {
    loop: true,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,			
			navText: ['<i class="fa-solid fa-chevron-left "></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
				0: {
					items: 1
				},
				500: {
					items: 1
				},
				768: {
					items: 1
				},
				1000: {
					items: 1
				},
				1300: {
					items: 1
				}
			}
  };

  public navigation() {
    this.router.navigate([routes.search1]);
  }
  ngOnInit() {
    this.myDateValue = new Date();
  }
  onDateChange(newDate: Date) {
    // console.log(newDate);
  }
}
