import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
  
@Component({
    selector: 'app-add-purchase',
    templateUrl: './add-purchase.component.html',
    styleUrls: ['./add-purchase.component.scss'],
    imports: [CommonModule,RouterLink,BsDatepickerModule]
})
export class AddPurchaseComponent implements OnInit {
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
