import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Notfound1Component } from './notfound1/notfound1.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'profile',
    data:{title:'vedant'},
    component:ProfileComponent
  },
  {
    path:'**',
    component:Notfound1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
