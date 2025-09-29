import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
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
