import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'nts-doctors-entry',
  template: ` <router-outlet />`,
})
export class RemoteEntry {}
