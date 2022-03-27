import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsfeedModule } from './newsfeed/newsfeed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule, BrowserAnimationsModule, NewsfeedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
