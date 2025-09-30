import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from '../../shared/custom-pagination/pagination.service';
import { DataService } from '../../shared/data/data.service';
import { doctorList, pageSelection, apiResultFormat } from '../../shared/models/models';
import { routes } from '../../shared/routes/routes';
import { CustomPaginationComponent } from '../../shared/custom-pagination/custom-pagination.component';
import { FormsModule } from '@angular/forms';
import { PaginationHeaderComponent } from '../../shared/pagination-header/pagination-header.component';

@Component({
    selector: 'app-doctor-list',
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.scss'],
    imports: [RouterLink, CustomPaginationComponent, FormsModule, MatSortModule, PaginationHeaderComponent],
})
export class DoctorListComponent {
  private data = inject(DataService);
  private pagination = inject(PaginationService);
  private router = inject(Router);

  public routes = routes;
  public tableData: Array<doctorList> = [];
  initChecked = false;

  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<doctorList>;
  public searchDataValue = '';
  // pagination variables end

  constructor() {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.doctorList) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getDoctorList().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: doctorList, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<doctorList>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
        tableData2: [],
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
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
}
