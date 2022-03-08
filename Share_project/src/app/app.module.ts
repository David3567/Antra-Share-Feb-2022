import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { UserComponent } from './admin/user/user.component';
import { UserinfoComponent } from './admin/userinfo/userinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
