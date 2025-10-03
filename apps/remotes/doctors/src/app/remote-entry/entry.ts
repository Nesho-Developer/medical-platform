import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'nts-doctors',
  template: `
    <div>Remote 2 loaded</div>
    <router-outlet/>`,
})
export class RemoteEntry {}
