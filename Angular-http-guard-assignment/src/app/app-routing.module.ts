import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotefoundComponent } from './notefound/notefound.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'home',
  //   pathMatch:'full'
  // },
  {
    path:'',
    loadChildren:()=> import('./home/home.module').then(c => c.HomeModule)
  },
  {
    path:'admin',
    canActivate: [AuthGuard],
    loadChildren:()=> import('./dashboard/dashboard.module').then(d => d.DashboardModule)
  },
  {
    path:'**',
    component:NotefoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
