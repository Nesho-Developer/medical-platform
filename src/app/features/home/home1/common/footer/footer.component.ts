import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [CommonModule,RouterLink,MatSelectModule],
})
export class FooterComponent {
  public routes = routes;

}
