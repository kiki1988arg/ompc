import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './components/contracts.component';
import { ContractfilterComponent } from './components/contractfilter/contractfilter.component';
import { MaterialModule } from '@shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    ContractsRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ContractsComponent, ContractfilterComponent

  ]
})
export class ContractsModule { }
