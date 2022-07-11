import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor } from '../core/interceptor/http-client.interceptor';
import { RegistrationserviceService } from '../core/services/registrationservice.service';
import { EmployeeService } from '../core/services/employee.service';
import { AuthGuardService } from '../core/auth-guard/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    EmployeeEditComponent,
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class DashboardModule { }
