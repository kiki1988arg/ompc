import { PurchaseDocumentFilters } from '@models/purchasedocumentfilters';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contractfilter',
  templateUrl: './contractfilter.component.html',
  styleUrls: ['./contractfilter.component.css']
})
export class ContractfilterComponent implements OnInit {

  @Output() searched = new EventEmitter<PurchaseDocumentFilters>();
  public Filters: PurchaseDocumentFilters;
  expanded: boolean;
  filterForm: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.Filters = new PurchaseDocumentFilters();
    this.filterForm = new FormGroup({
      'documentFromField': new FormControl(this.Filters.documentFromField, [
        Validators.required,
        Validators.minLength(4)])
    });


    this.expanded = true;

  }

  search() {
    this.searched.emit(this.Filters);
    this.expanded = false;
  }


}
