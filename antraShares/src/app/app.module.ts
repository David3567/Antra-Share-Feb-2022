import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { ProfileModule } from './profile/profile.module';
import { SettingModule } from './setting/setting.module';
import { HttpClientModule } from '@angular/common/http';

import { UserinforService } from './services/userinfor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContentpipePipe } from './pipe/contentpipe.pipe';
import { VariableValue } from './services/variable.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    LoginModule,
    // NewsfeedModule,
    ProfileModule,
    SettingModule,
    BrowserAnimationsModule,


    RegisterModule,

    BrowserAnimationsModule,


    NoopAnimationsModule,
    MatButtonModule, MatCardModule, MatGridListModule, MatIconModule,MatMenuModule

  ],
  providers: [UserinforService, VariableValue],
  bootstrap: [AppComponent],
})
export class AppModule { }
