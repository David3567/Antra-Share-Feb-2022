import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomeComponent } from './components/home/home.component';
// import { ProductComponent } from './components/product/product.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
// import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
