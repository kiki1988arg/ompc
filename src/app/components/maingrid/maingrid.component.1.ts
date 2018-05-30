import { Component, OnInit } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { mock } from 'src/app/mock/mock';


@Component({
  selector: 'app-maingrid',
  templateUrl: './maingrid.component.html',
  styleUrls: ['./maingrid.component.css']
})
export class MaingridComponent implements OnInit {

  public state: any = {
    // Initial filter descriptor

  };
  public gridData: GridDataResult = process(mock, this.state);
  public gridDetailId: number;
  public columns: string[] = [];
  public hiddenColumns: string[] = [];


  constructor() { }

  ngOnInit() {
  }



  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(mock, this.state);
  }

  public getDetail(row: any): void {
    console.log(row.dataItem.NroPedido);
  }
  public getpdf(value: any) {
    window.open(value, '_blank');

  }
}
