import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubnewsComponent } from './subnews/subnews.component';
import { MainnewsComponent } from './mainnews/mainnews.component';

@NgModule({
  declarations: [
    AppComponent,
    SubnewsComponent,
    MainnewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
