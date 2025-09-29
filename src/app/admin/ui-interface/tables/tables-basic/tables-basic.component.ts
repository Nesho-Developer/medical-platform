import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tables-basic',
    templateUrl: './tables-basic.component.html',
    styleUrls: ['./tables-basic.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class TablesBasicComponent {
  public routes = routes;
}
