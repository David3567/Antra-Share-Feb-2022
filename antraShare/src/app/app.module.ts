import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserinfoComponent } from './admin/userinfo/userinfo.component';
import { UserlistService } from './service/userlist.service';
import { UserlistComponent } from './admin/userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserinfoComponent,
    UserinfoComponent,
    UserlistComponent,
    LoginComponent,
    ProfileComponent,
    NewsfeedComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
