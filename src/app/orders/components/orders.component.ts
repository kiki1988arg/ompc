import { PurchaseDocumentFilters } from '@models/purchasedocumentfilters';
import { Component, OnInit } from '@angular/core';
import { ordercolumns } from '@orders/Columns/orders';
import { IColumnSetting } from '@interfaces/Icolumns';
import { OrderService } from '@orders/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public columns: IColumnSetting[] = ordercolumns;
  public mock: any[];
  public orderFilter: PurchaseDocumentFilters;
  public gridData: any[];

  constructor( private OrderServices: OrderService) { }

  ngOnInit() {
  }

  searched(Filters: PurchaseDocumentFilters) {
    this.orderFilter = Filters;
    this.orderFilter.documentTypeField = 'F';
    this.orderFilter.supplierCodeSapFromField = '0000102728';
    this.orderFilter.supplierCodeSapToField = '0000102728';

    this.OrderServices.GetPurchaseDocuments(this.orderFilter).subscribe(data => {
      this.gridData = data;
    });
  }


}
