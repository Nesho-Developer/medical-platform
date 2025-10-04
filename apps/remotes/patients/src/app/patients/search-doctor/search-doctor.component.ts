import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@nts/shared';
@Component({
    selector: 'app-search-doctor',
    templateUrl: './search-doctor.component.html',
    styleUrls: ['./search-doctor.component.scss'],
    imports:[RouterModule]
})
export class SearchDoctorComponent {
  public routes = routes;

}
