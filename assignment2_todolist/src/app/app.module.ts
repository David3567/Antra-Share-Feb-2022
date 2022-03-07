import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodolistService } from './services/todolist.service';

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoitemComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [TodolistService],
  bootstrap: [AppComponent],
})
export class AppModule {}
