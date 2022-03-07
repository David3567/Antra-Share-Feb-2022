import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProfileComponent } from './profile/profile.component';
// import { SettingsComponent } from './settings/settings.component';
// import { NewsfeedComponent } from './newsfeed/newsfeed.component';
// import { LikelistComponent } from './likelist/likelist.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}