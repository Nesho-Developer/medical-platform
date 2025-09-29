import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [CommonModule,RouterLink],
})
export class FooterComponent {
  public routes = routes

}
