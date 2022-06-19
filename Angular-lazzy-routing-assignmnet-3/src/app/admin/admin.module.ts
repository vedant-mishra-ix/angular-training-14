import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomerModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    CustomerComponent
  ]
})
export class AdminModule { }
