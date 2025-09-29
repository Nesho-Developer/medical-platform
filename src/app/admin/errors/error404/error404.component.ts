import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error404',
    templateUrl: './error404.component.html',
    styleUrls: ['./error404.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class Error404Component {
  public routes = routes;
}
