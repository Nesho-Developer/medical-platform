import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-edit-purchase',
    templateUrl: './edit-purchase.component.html',
    styleUrls: ['./edit-purchase.component.scss'],
    imports: [CommonModule,RouterLink,BsDatepickerModule]
})
export class EditPurchaseComponent implements OnInit{
  public routes = routes;
  date = new Date();
  myDateValue!: Date ;
  ngOnInit() {
    this.myDateValue = new Date();
  }
  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
