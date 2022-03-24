import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodolistService } from './services/todolist.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInterceptor } from './services/todo.interceptor';
import { CatcherrorInterceptor } from './services/catcherror.interceptor';

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoitemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [
    TodolistService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TodoInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatcherrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
