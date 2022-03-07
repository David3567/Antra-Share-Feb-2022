import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { StoryComponent } from './story/story.component';
import { NewFeedComponent } from './new-feed/new-feed.component';
import { UserslistComponent } from './admin/userslist/userslist.component';
import { UserDetailedInfoPanelComponent } from './admin/user-detailed-info-panel/user-detailed-info-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    MyProfileComponent,
    StoryComponent,
    NewFeedComponent,
    UserslistComponent,
    UserDetailedInfoPanelComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
