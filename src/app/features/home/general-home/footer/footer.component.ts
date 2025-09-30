import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes'; 

import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatSelectModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public routes = routes
}
