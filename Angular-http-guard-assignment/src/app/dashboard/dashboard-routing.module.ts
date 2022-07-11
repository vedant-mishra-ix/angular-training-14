import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:
    [
      {
        path:'employee',
        loadChildren:()=> import('./employee/employee.module').then(e => e.EmployeeModule)
      },
      // {
      //   path:'list',
      //   component:EmployeeListComponent,
      // },
      // {
      //   path:'add',
      //   component:EmployeeFormComponent
      // },
      // {
      //   path:'edit',
      //   component:EmployeeEditComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
