import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdvMapComponent } from './adv-map/adv-map.component';
import { MergeobsComponent } from './mergeobs/mergeobs.component';

@NgModule({
  declarations: [AppComponent, AdvMapComponent, MergeobsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
