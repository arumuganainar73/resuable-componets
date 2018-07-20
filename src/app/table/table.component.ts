import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { PeriodicElement } from '../../app/app.interface';
import { SelectionModel } from '@angular/cdk/collections';

import { ApiRequestService } from '../services/api-request.service';
import { throwError } from 'rxjs';

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  selector = '.ng6-table';
  apiData = [];
  postData = [];
  postPerPage = 10;
  startIndex = 0;
  endIndex = 10;
  constructor(public apiRequest: ApiRequestService) {}

  displayedColumns: string[] = [
    'select',
    'position',
    'name',
    'weight',
    'symbol'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getTableData();
  }
  getTableData() {
    this.apiRequest.getTableDatas().subscribe(
      data => {
        console.log('get table data success!', data);
        if (data && data[0]['data'].length > 0) {
          this.apiData = data[0]['data'];
          for (let i = this.startIndex; i < this.endIndex; ++i) {
            this.postData['push'](this.apiData[i]);
          }
          this.matTableCofig();
        }
      },
      error => {
        console.error('get table data success error!');
        return throwError(error); // Angular 6/RxJS 6
      }
    );
  }
  matTableCofig() {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.postData);
    this.selection = new SelectionModel<PeriodicElement>(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows; 
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  onScrollDown() {
    console.log('scrolled!! down');
    this.startIndex = this.endIndex;
    this.endIndex += 10;
    if (this.endIndex >  this.apiData.length) {
      return;
    }
    this.appendItems('push');
  }
  onScrollUp() {
    console.log('scrolled Up!!');
    this.startIndex -= 10 ;
    this.endIndex -= 10;
    if (this.startIndex < 0 || this.endIndex < 0 ) {
      return;
    }
    this.prependItems('unshift');
  }
  appendItems(method) {
    for (let i = this.startIndex; i < this.endIndex; ++i) {
      this.postData[method](this.apiData[i]);
    }
    this.matTableCofig();
  }
  prependItems(method) {
    for (let i = this.startIndex; i < this.endIndex; ++i) {
      this.postData[method](this.apiData[i]);
    }
    this.matTableCofig();
  }
}
