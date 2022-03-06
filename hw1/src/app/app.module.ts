import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hw1Component } from './hw1/hw1.component';
import { ContentlistComponent } from './contentlist/contentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    Hw1Component,
    ContentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
