import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomDirective } from './customdirective/custom.directive';
import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { NgfortrackbyComponent } from './ngfortrackby/ngfortrackby.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    CustomdirectiveComponent,
    NgfortrackbyComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
