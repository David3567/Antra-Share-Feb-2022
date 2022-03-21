import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './modules/admin/admin.module';
import { NewsFeedModule } from './modules/news-feed/news-feed.module';
import { ProfileModule } from './modules/profile/profile.module';
import { LoginModule } from './modules/login/login.module';
import { SettingModule } from './modules/setting/setting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    NewsFeedModule,
    AdminModule,
    ProfileModule,
    LoginModule,
    SettingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
