import { Component, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter, Observable } from 'rxjs';
import { CostingDetails, SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-search-costing',
  templateUrl: './search-costing.component.html',
  styleUrls: ['./search-costing.component.css']
})
export class SearchCostingComponent {
  displayedColumns: string[] = ['costingid', 'costingtype', 'odspid', 'status', 'costingname', 'owner', 'producttype', 'lastupdated', 'transactionid', 'adminsystem', 'action'];
  color = 'lightgray';
  dataSource!: any;
  showFilters: boolean = false;
  loading !: boolean;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  saveInProgress!: boolean;
  @Input() fullScreen = true;
  @Input() type = 'line-scale';
  // @Input() color = '#006E73';
  @Input() bdColor = '#rgba(199,199,19990.4)';
  @Input() size = 'default';
  @Input() showSpinner = true;
  globalFilter: any = '';


  constructor(private web: SearchService) {
    this.loading = true;
    this.web.getSearchResult().subscribe(x => {
      this.loading = false;
      this.dataSource = x;

      this.dataSource = new MatTableDataSource<CostingDetails>(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  get showFilterFields() {
    return this.showFilters = !this.showFilters;
  };

  applyFilter(event: Event) {
    this.globalFilter = filter;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }
}
