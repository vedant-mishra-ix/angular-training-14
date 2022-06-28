import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { SectionContentComponent } from './section-content/section-content.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'section',
    pathMatch:'full'
  },
  {
    path:"section",
    component:SectionContentComponent
  },
  // {
  //   path:'**',
  //   component:NotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
