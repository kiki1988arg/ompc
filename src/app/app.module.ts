import { ExampleService } from './services/example.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridviewComponent } from './components/gridview/gridview.component';
import { FilterComponent } from './components/filter/filter.component';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { GriddetailComponent } from './griddetail/griddetail.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GridviewComponent,
    FilterComponent,
    GridviewComponent,
    GriddetailComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
