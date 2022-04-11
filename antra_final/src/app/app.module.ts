import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { ProfileModule } from './profile/profile.module';
import { SettingModule } from './setting/setting.module';
import { NewsfeedService } from './core/newsfeed.service';
import { Variables } from './core/globalVariable';
import { HttpRequestInterceptor } from './core/header/interceptors/httpinterceptors';
import { ErrorCatchInterceptor } from './core/header/interceptors/errorinterceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    SharedModule,
    CoreModule,
    LoginModule,
    NewsFeedModule,
    ProfileModule,
    SettingModule,
    BrowserAnimationsModule
  ],
  providers: [NewsfeedService, Variables,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchInterceptor,
      multi: true,
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
