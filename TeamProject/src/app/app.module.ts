import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './modules/admin/admin.module';
import { NewsFeedModule } from './modules/news-feed/news-feed.module';
import { ProfileModule } from './modules/profile/profile.module';
import { LoginModule } from './modules/login/login.module';
import { SettingModule } from './modules/setting/setting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
