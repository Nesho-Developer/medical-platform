import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class BlogListComponent {
  public routes = routes;

}
