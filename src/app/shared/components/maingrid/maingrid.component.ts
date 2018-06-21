import { Component, OnInit, Input } from '@angular/core';
import { GridComponent, GridDataResult, DataStateChangeEvent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { IColumnSetting } from '@interfaces/Icolumns';
import { Contrat } from '@models/contrat';
import { ActivatedRoute } from '@angular/router';
import { PurchaseDocument } from '@models/purchasedocument';



@Component({
  selector: 'app-maingrid',
  templateUrl: './maingrid.component.html',
  styleUrls: ['./maingrid.component.css']
})
export class MaingridComponent implements OnInit {
  @Input() columns: IColumnSetting[];
  @Input() gridData: PurchaseDocument[];
  public pageSize = 10;
  public skip = 0;
  private gridView: GridDataResult;
  public gridDetailId: number;
  public hiddenColumns: string[] = [];
  private supplierId: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.supplierId = params.supplier);

  }

  ngOnInit() {
    this.loadItems();
  }

  public getDetail(row: any): void {
    console.log(row.dataItem.NroPedido);
  }
  public getpdf(value: any) {
    window.open(value, '_blank');

  }
  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }
  private loadItems(): void {
    this.gridView = {
      data: this.gridData.slice(this.skip, this.skip + this.pageSize),
      total: this.gridData.length
    };
  }
}
