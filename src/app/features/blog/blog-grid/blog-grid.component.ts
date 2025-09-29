import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
    selector: 'app-blog-grid',
    templateUrl: './blog-grid.component.html',
    styleUrls: ['./blog-grid.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class BlogGridComponent {
  public routes = routes;

}
