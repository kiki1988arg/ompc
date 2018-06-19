import { PurchaseDocumentFilters } from '@models/purchasedocumentfilters';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ordersfilter',
  templateUrl: './ordersfilter.component.html',
  styleUrls: ['./ordersfilter.component.css']
})
export class OrdersfilterComponent implements OnInit {

  @Output() searched = new EventEmitter<PurchaseDocumentFilters>();
  public Filters: PurchaseDocumentFilters;
  expanded: boolean;

  constructor() {

  }

  ngOnInit() {
    this.Filters = new PurchaseDocumentFilters();
    this.expanded = true;

  }

  search() {
    this.searched.emit(this.Filters);
    this.expanded = false;
  }

}
