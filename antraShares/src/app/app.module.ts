import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { ProfileModule } from './profile/profile.module';
import { SettingModule } from './setting/setting.module';
import { HttpClientModule } from '@angular/common/http';

import { UserinforService } from './services/userinfor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    LoginModule,
    NewsfeedModule,
    ProfileModule,
    SettingModule,

    BrowserAnimationsModule,

    NoopAnimationsModule,
    MatButtonModule, MatCardModule, MatGridListModule, MatIconModule
  ],
  providers: [UserinforService],
  bootstrap: [AppComponent],
})
export class AppModule { }
