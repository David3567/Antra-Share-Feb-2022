import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminModule } from './module/admin/admin.module';
import { NewsfeedModule } from './module/newsfeed/newsfeed.module';
import { HomeModule } from './module/home/home.module';

import {MatMenuModule} from '@angular/material/menu';
import { ProfileModule } from './module/profile/profile.module';
import { JwtService } from './core/services/jwt.service';
import { VariableValue } from './services/variable.service';

@NgModule({
  declarations: [	AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    AdminModule,
    NewsfeedModule,
    HomeModule,
    MatMenuModule,
    ProfileModule
  ],
  providers: [JwtService, VariableValue],
  bootstrap: [AppComponent],
})
export class AppModule {}
