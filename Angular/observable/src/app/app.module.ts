import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdvMapComponent } from './adv-map/adv-map.component';
import { MergeobsComponent } from './mergeobs/mergeobs.component';
import { SubjectComponent } from './subject/subject.component';
import { Item1Component } from './subject/item1/item1.component';
import { Item2Component } from './subject/item2/item2.component';
import { Item3Component } from './subject/item3/item3.component';

@NgModule({
  declarations: [AppComponent, AdvMapComponent, MergeobsComponent, SubjectComponent, Item1Component, Item2Component, Item3Component],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
