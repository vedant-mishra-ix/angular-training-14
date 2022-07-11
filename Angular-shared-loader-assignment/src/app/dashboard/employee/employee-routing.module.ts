import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    children:
    [
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      },
      {
        path:'add',
        component:AddComponent,
      },
      {
        path:'edit/:id',
        component:EditComponent,
      },
      {
        path:'list',
        component:ListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
