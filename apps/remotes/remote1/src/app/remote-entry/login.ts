import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nts-nx-welcome',
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1>Welcome to remote1!</h1>
          <a routerLink="/home">Go to Home</a>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class Login {}
