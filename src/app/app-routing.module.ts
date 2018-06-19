import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from '@shared/components/notfound/notfound.component';


const appRoutes: Routes = [
  {
    path: 'contracts',
    loadChildren: './contracts/contracts.module#ContractsModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: '**',
    loadChildren: './contracts/contracts.module#ContractsModule'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
