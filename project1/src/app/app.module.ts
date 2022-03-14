import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './login/login.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { ProfileModule } from './profile/profile.module';
import { SettingModule } from './setting/setting.module';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GetNewsService } from 'src/services/getNews.service';


@NgModule({
  declarations: [	
    AppComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    AdminModule,
    LoginModule,
    NewsfeedModule,
    ProfileModule,
    SettingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [GetNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
