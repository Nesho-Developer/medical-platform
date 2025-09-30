import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../shared/routes/routes';
@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],
    imports: [RouterModule]
})
export class ReportsComponent {
  public routes = routes;

}
