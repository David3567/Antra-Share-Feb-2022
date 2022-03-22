import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowmoduleModule } from './showmodule/showmodule.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ShowmoduleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
