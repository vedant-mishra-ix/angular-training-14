import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeListComponent } from './home-list/home-list.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../core/services/home.service';
import { ShareModule } from '../share/share.module';
import { AlertBoxService } from '../share/components/alert-box.service';
import { AlertBoxComponent } from '../share/components/alert-box/alert-box.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeListComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule,
  ],
  providers:[HomeService]

})
export class HomeModule { }
