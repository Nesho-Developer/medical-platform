
import { Component, inject } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
// import { DoctorBreadcrumbComponent } from '../../../doctors/common/doctor-breadcrumb/doctor-breadcrumb.component';
// import { DoctorSidebarComponent } from '../../../doctors/common/doctor-sidebar/doctor-sidebar.component';
import { PaginationService, pageSelection, tablePageSize } from '@nts/shared';
import { DataService } from '@nts/shared';
import { apiResultFormat, invoice } from '@nts/shared';
import { routes } from '@nts/shared';

@Component({
    selector: 'app-invoice-list',
    templateUrl: './invoice-list.component.html',
    styleUrls: ['./invoice-list.component.scss'],
    imports: [RouterLink,]
      // DoctorSidebarComponent, DoctorBreadcrumbComponent]
})
export class InvoiceListComponent {
  private data = inject(DataService);
  private pagination = inject(PaginationService);
  private router = inject(Router);

  public routes = routes;
  public tableData: Array<invoice> = [];

  // pagination variables
  public pageSize = 5;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<invoice>;
  public searchDataValue = '';
  // pagination variables end
  constructor() {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.invoice) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });

  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getInvoice().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: invoice, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<invoice>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
        tableData2: this.tableData,
        tableData3: [],
        tableData4: []
      });
    });
  }


   public sortData(sort: Sort) {
    const data = this.tableData.slice();

    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }


}
