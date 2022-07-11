import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:
    [
      {
        path:'',
        component:HomeListComponent
      },
      {
      path:'about',
      component:AboutComponent,
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'registration',
        component:RegistrationComponent,
      }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
