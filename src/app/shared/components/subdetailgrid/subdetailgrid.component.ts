import { subdetailmock } from '@mocks/mocksubdetails';
import { Component, OnInit } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';


@Component({
  selector: 'app-subdetailgrid',
  templateUrl: './subdetailgrid.component.html',
  styleUrls: ['./subdetailgrid.component.css']
})
export class SubdetailgridComponent implements OnInit {

  public state: any = {
    // Initial filter descriptor

  };
  public gridData: GridDataResult = process(subdetailmock, this.state);

  ngOnInit() {
  }


}
