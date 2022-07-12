import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CustomerComponent } from './customer.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ListtIdComponent } from './listt-id/listt-id.component';

const routes: Routes = [
  {
    path:'',
    component:CustomerComponent,
    children:[
      {
        path:'',
        component:ListComponent
      },
      {
        path:'list/:id',
        component:ListtIdComponent
      },
      {
        path:'add',
        component:AddComponent
      },
      {
        path:'edit',
        component:EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
