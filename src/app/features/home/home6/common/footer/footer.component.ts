import { Component } from '@angular/core';
import { routes } from '../../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface data {
  value: string;
}
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [CommonModule,RouterLink],
})
export class FooterComponent {
  public routes = routes;
  public selectedValue1 = '';
  selectedList1: data[] = [
    { value: 'English' },
    { value: 'Japanese' }
  ];
}
