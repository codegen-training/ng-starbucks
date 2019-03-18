import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CoffeeListComponent } from './components/coffee/coffee-list/coffee-list.component';
import { CoffeeAddComponent } from './components/coffee/coffee-add/coffee-add.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderAddComponent } from './components/order/order-add/order-add.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer/customer-add/customer-add.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoffeeListComponent,
    CoffeeAddComponent,
    OrderListComponent,
    OrderAddComponent,
    CustomerListComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
