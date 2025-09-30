import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
@Component({
    selector: 'app-call',
    templateUrl: './call.component.html',
    styleUrls: ['./call.component.scss'],
    imports: [RouterModule]
})
export class CallComponent {
  public routes = routes;

}
