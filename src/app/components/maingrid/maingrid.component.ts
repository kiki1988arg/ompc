import { contratscolumns } from '@columns/contrats';
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

  public gridData: any = mock;
  public gridDetailId: number;
  public columns: any[] = contratscolumns;

  constructor() { }

  ngOnInit() {
  }

  public getDetail(row: any): void {
    console.log(row.dataItem.NroPedido);
  }
  public getpdf(value: any) {
    window.open(value, '_blank');

  }
}
