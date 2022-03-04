import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CarditemComponent } from './carditem/carditem.component';

@NgModule({
  declarations: [AppComponent, CardlistComponent, CarditemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
