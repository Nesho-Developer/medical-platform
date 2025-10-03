
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    imports: [RouterLink]
})
export class BlogDetailsComponent {
  public routes = routes;

}
