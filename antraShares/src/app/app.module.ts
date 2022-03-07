import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { ProfileModule } from './profile/profile.module';
import { SettingModule } from './setting/setting.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    LoginModule,
    NewsfeedModule,
    ProfileModule,
    SettingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
