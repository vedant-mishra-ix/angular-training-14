import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NotefoundComponent } from './notefound/notefound.component';
import {AuthGuard} from "./core/guard/auth.guard";
import { HttpClientInterceptor } from './core/interceptor/http-client.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NotefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  // providers:[],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:HttpClientInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
