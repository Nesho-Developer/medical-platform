
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '@nts/shared';

@Component({
  selector: 'app-speciality',
  imports: [RouterLink],
  templateUrl: './speciality.component.html',
  styleUrl: './speciality.component.scss'
})
export class SpecialityComponent {
 routes = routes;
}
