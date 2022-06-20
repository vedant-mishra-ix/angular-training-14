import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListtIdComponent } from './listt-id/listt-id.component';
import { CustomerComponent } from './customer.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    ListtIdComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
