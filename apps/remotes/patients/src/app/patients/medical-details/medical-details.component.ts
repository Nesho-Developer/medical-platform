
import { Component, inject } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { PaginationService, pageSelection, tablePageSize } from '@nts/shared';
import { DataService } from '@nts/shared';
import { apiResultFormat, medicalDetails } from '@nts/shared';
import { routes } from '@nts/shared';
import { PatientSidebarComponent } from '../common/patient-sidebar/patient-sidebar.component';
import { PatientBreadcrumbComponent } from '../common/patient-breadcrumb/patient-breadcrumb.component';

@Component({
    selector: 'app-medical-details',
    templateUrl: './medical-details.component.html',
    styleUrls: ['./medical-details.component.scss'],
    imports: [RouterLink, PatientSidebarComponent, PatientBreadcrumbComponent]
})
export class MedicalDetailsComponent {
  private data = inject(DataService);
  private pagination = inject(PaginationService);
  private router = inject(Router);

  public routes = routes;
  public tableData: Array<medicalDetails> = [];

   // pagination variables
   public pageSize = 5;
   public serialNumberArray: Array<number> = [];
   public totalData = 0;
   showFilter = false;
   dataSource!: MatTableDataSource<medicalDetails>;
   public searchDataValue = '';
   // pagination variables end
   constructor() {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.medicalDetails) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });

  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getMedicalDetails().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: medicalDetails, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<medicalDetails>(this.tableData);
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
