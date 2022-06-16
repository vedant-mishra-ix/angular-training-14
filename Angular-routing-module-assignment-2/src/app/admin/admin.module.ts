import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { Notfound1Component } from './notfound1/notfound1.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    Notfound1Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
