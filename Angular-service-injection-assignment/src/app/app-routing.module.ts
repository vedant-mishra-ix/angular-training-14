import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseCalculaterComponent } from './expense-calculater/expense-calculater.component';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [
  {
    path:'',
    component:ExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
