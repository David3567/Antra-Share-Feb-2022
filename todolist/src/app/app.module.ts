import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Form, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodolistitemComponent } from './components/todolistitem/todolistitem.component';
import { TodoserviceService } from './services/todoservice.service';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoserviceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
