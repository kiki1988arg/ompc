import { AppComponent } from './app.component';

import { ExampleService } from './services/example.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';


import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FilterComponent } from './components/filter/filter.component';
import { MaingridComponent } from './components/maingrid/maingrid.component';
import { SubdetailgridComponent } from './components/subdetailgrid/subdetailgrid.component';
import { DetailgridComponent } from './components/detailgrid/detailgrid.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';





@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SubdetailgridComponent,
    MaingridComponent,
    DetailgridComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    HttpModule,
    HttpClientModule,
    LabelModule,
    DateInputsModule,
    DropDownsModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
