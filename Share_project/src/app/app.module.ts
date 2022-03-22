import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { UserComponent } from './admin/user/user.component';
import { UserinfoComponent } from './admin/userinfo/userinfo.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { StoryComponent } from './news-feed/story/story.component';
import { FavoriteListComponent } from './news-feed/favorite-list/favorite-list.component';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { RegisterComponent } from './login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    UserinfoComponent,
    NewsFeedComponent,
    LoginComponent,
    StoryComponent,
    FavoriteListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule,
    LoginModule,
    NewsFeedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
