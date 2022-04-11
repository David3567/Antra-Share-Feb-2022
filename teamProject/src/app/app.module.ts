import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AdminModule } from './pages/admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './pages/login/login.module';
import { UserlistService } from './services/userlist.service';
import { TimeoutwindowComponent } from './components/timeoutwindow/timeoutwindow.component';
import { NewsfeedModule } from './pages/newsfeed/newsfeed.module';
import { NewsfeedService } from './services/newsfeed.service';
import { ProfileModule } from './pages/profile/profile.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AuthenService } from './services/authen.service';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtService } from './services/jwt.service';
import { GuardService } from './services/guard.service';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { ErrorHandledInterceptor } from './interceptor/error-handled.interceptor';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    TimeoutwindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    AdminModule,
    SharedModule,
    LoginModule,
    NewsfeedModule,
    ProfileModule,
    JwtModule,
  ],
  providers: [UserlistService,NewsfeedService, { provide: NZ_I18N, useValue: en_US }, AuthenService, JwtService, GuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandledInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
