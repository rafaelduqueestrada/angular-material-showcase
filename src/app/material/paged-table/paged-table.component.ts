import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

// https://github.com/angular/material2/blob/master/src/demo-app/table/people-database.ts
// https://stackblitz.com/angular/lmgnavpdkyyp?file=app%2Ftable-pagination-example.ts
// https://material.angular.io/components/table/overview

@Component({
  selector: 'app-paged-table',
  templateUrl: './paged-table.component.html',
  styleUrls: ['./paged-table.component.css']
})
export class PagedTableComponent implements OnInit, AfterViewInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  dataSource: MatTableDataSource<Element>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Element>();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
