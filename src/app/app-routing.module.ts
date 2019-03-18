import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderListComponent} from "./components/order/order-list/order-list.component";
import {CustomerListComponent} from "./components/customer/customer-list/customer-list.component";
import {CoffeeListComponent} from "./components/coffee/coffee-list/coffee-list.component";

const routes: Routes = [
  { path: 'order', component: OrderListComponent },
  { path: 'coffee', component: CoffeeListComponent },
  { path: 'customer', component: CustomerListComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
