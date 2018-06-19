import { PurchaseDocumentService } from './../../../services/PurchaseDocument.service';
import { Component, OnInit, Input } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { GridComponent, GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
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
  public gridDetailId: number;
  public hiddenColumns: string[] = [];
  private supplierId: string;

  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.supplierId = params.supplier);

  }

  ngOnInit() { }

  public getDetail(row: any): void {
    console.log(row.dataItem.NroPedido);
  }
  public getpdf(value: any) {
    window.open(value, '_blank');

  }
  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }
}
