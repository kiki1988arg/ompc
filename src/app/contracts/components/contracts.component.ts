import { PurchaseDocumentFilters } from '@models/purchasedocumentfilters';
import { contractscolumns } from '@contracts/columns/contracts';
import { IColumnSetting } from '@interfaces/Icolumns';
import { Component, OnInit } from '@angular/core';
import { ContractService } from '@contracts/services/contract.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  public columns: IColumnSetting[] = contractscolumns;
  public gridData: any[];
  contractFilter: PurchaseDocumentFilters;

  constructor(
    private ContratServices: ContractService) { }

  ngOnInit() { }

  searched(Filters: PurchaseDocumentFilters) {
    this.contractFilter = Filters;
    this.contractFilter.documentTypeField = 'K';
    this.contractFilter.supplierCodeSapFromField = '0000149541';
    this.contractFilter.supplierCodeSapToField = '0000149541';
    this.ContratServices.GetPurchaseDocuments(this.contractFilter).subscribe(data => {
      this.gridData = data;
    });
  }

}
