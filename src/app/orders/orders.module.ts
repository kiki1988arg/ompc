import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './components/orders.component';
import { SharedModule } from '@shared/shared.module';
import { OrdersfilterComponent } from './components/ordersfilter/ordersfilter.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
    MaterialModule
  ],
  declarations: [OrdersComponent, OrdersfilterComponent]
})
export class OrdersModule { }
