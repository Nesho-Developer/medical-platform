import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from '../../../shared/routes/routes';

import { NgZone } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-general-home',
  imports: [RouterLink, FooterComponent, HeaderComponent, CarouselModule, BsDatepickerModule],
  templateUrl: './general-home.component.html',
  styleUrl: './general-home.component.scss'
})
export class GeneralHomeComponent {
router = inject(Router);
private zone = inject(NgZone);

public routes=routes;
time: Date | null = null; // Bind this to the p-calendar
bsValue=new Date();
public spcialitySlider : OwlOptions={
  loop: true,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
			responsive: {
				0: {
					items: 2
				},
				500: {
					items: 3
				},
				768: {
					items: 4
				},
				992: {
					items: 6
				},
				1200: {
					items: 8
				}
			}
}
public doctorSlider : OwlOptions={
  loop: true,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navText: ['<i class="isax isax-arrow-left"></i>', '<i class="isax isax-arrow-right-1"></i>'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 4
				},
				1300: {
					items: 4
				}
			}
}
public testimonialSlider:OwlOptions={
  loop: true,
			margin: 24,
			dots: false,
			nav: false,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3
				}
			}
}
navigate(){
	this.router.navigate([routes.search2])
}
}
