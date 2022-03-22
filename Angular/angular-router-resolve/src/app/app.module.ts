import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './components/product1/product1.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { Product1DetailComponent } from './components/product1-detail/product1-detail.component';
import { Product2Component } from './components/product2/product2.component';
import { Product2DetailComponent } from './components/product2-detail/product2-detail.component';
import { StaticComponent } from './components/static/static.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    ContactComponent,
    HomeComponent,
    Product1DetailComponent,
    Product2Component,
    Product2DetailComponent,
    StaticComponent,
    DynamicComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
