import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from '../../../shared/routes/routes';
@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    imports:[CommonModule,CarouselModule]
})
export class ChatComponent {
  public routes = routes;
  public chat = false;

  showChat(){
    this.chat = !this.chat;
  }
  public onlineList: OwlOptions = {
    margin: 0,
    nav: false,
    loop: false,
    dots: false,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 5,
      },
      768: {
        items: 5,
      },
      1170: {
        items: 5,
      },
    },
  };
}
