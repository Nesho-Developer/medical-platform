import { Component } from '@angular/core';
import { routes } from '../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss'],
    imports: [CommonModule, RouterModule]
})
export class ReportsComponent {
  public routes = routes;

}
