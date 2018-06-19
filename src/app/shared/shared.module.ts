import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { MaingridComponent } from './components/maingrid/maingrid.component';
import { SubdetailgridComponent } from './components/subdetailgrid/subdetailgrid.component';
import { DetailgridComponent } from './components/detailgrid/detailgrid.component';

// Kendo modules
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    GridModule,
    LabelModule,
    DateInputsModule,
    DropDownsModule,
    InputsModule,
    ButtonsModule,
    FormsModule
  ],
  declarations: [
    FilterComponent,
    MaingridComponent,
    SubdetailgridComponent,
    DetailgridComponent
  ],
  exports: [
    FilterComponent,
    MaingridComponent,
    SubdetailgridComponent,
    DetailgridComponent,
    LayoutModule,
    ButtonsModule,
    DateInputsModule,
    DropDownsModule,
    InputsModule,
    FormsModule
  ]
})
export class SharedModule { }
