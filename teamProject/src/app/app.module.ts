import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  ],
  providers: [UserlistService,NewsfeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
