import { Component } from '@angular/core';
import { NxWelcome } from './nx-welcome';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [NxWelcome, RouterLink, RouterOutlet],
  selector: 'nts-remote1-entry',
  template: `
    <ul>
      <li><a routerLink="login">Login</a></li>
      <li><a routerLink="welcome">Home</a></li>
    </ul>
<router-outlet/>
  `,
})
export class RemoteEntry {}
