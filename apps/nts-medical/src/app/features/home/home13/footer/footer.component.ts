import { Component } from '@angular/core';
import { routes } from '@nts/shared';

import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
interface data {
  value: string;
}
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [RouterLink, MatSelectModule, FormsModule],
})
export class FooterComponent {
  public routes = routes
  public selectedValue = '';
  public selectedValue1 = '';

  selectedList: data[] = [
    { value: 'India' },
    { value: 'US' },

  ];
  selectedList1: data[] = [
    { value: 'USD' },
    { value: 'INR' },

  ];

}
