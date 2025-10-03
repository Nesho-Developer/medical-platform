import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '@nts/shared';
import { partnersSlider } from '@nts/shared';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
    selector: 'app-home5',
    templateUrl: './home5.component.html',
    styleUrls: ['./home5.component.scss'],
    imports: [CommonModule,RouterLink,FooterComponent,HeaderComponent,CarouselModule,BsDatepickerModule],
})
export class Home5Component implements OnInit{
  private router = inject(Router);
  private data = inject(DataService);

  public routes = routes;
  public partnersSlider: partnersSlider[] = [];
  myDateValue!: Date ;
date = new Date();
public isClassAdded: boolean[] = [false];


toggleClass(index: number){
this.isClassAdded[index] = !this.isClassAdded[index]
}
constructor() {this.partnersSlider = this.data.partnersSlider;}
public navigation() {
  this.router.navigate([routes.search2]);
}
ngOnInit() {
  this.myDateValue = new Date();
}
onDateChange(_: Date) {
  // console.log(newDate);
}
public ourServiceOption: OwlOptions = {
  loop: true,
  margin:24,
  dots: false,
  nav:true,
  smartSpeed: 2000,
  navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
  responsive:{
    0:{
      items:1
    },
    500:{
      items:1
    },
    768:{
      items:2
    },
    1000:{
      items:3
    }
  }
};
public ourDoctorsOption: OwlOptions = {
  loop: true,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: {
				0: {
					items: 1
				},
				500: {
					items: 1
				},
				768: {
					items: 2
				},
				1000: {
					items: 4
				},
				1400: {
					items: 4
				},
				1300: {
					items: 3
				}
			}
};
public ourtestimonialOption: OwlOptions = {
  loop: true,
  margin: 24,
  dots: false,
  nav: true,
  smartSpeed: 2000,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
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
public ourBlogOption: OwlOptions = {
  loop: true,
  margin: 24,
  dots: false,
  nav: true,
  smartSpeed: 2000,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
    1300: {
      items: 4
    }
  }
};
}
