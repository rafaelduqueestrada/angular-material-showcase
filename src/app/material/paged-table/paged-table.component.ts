import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';
import {ElementService} from './element.service';
import {ElementModel} from './element.model';

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

  dataSource: MatTableDataSource<ElementModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ElementModel>([]);
  }

  onFilter(form: NgForm) {
    console.log(form.value.name);
    console.log(this.dataSource.paginator.pageIndex);
    console.log(this.dataSource.paginator.pageSize);

    this.dataSource.data = this.elementService.getPagedElements(this.dataSource.paginator.pageSize,
                                                              this.dataSource.paginator.pageIndex);

    console.log(this.dataSource.paginator);

    this.dataSource.paginator.length = this.elementService.getLengthElements();

    console.log(this.dataSource.paginator);

    console.log(this.dataSource.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
