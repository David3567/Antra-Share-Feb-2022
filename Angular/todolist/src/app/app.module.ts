import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodolistService } from './services/todolist.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInterceptor } from './services/todo.interceptor';
import { CatcherrorInterceptor } from './services/catcherror.interceptor';
import { todoreducer } from './Ngrx/todo.reducer';
import { TodoEffect } from './Ngrx/todo.effect';

export const baseUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoitemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    StoreModule.forRoot({ todos: todoreducer }),
    EffectsModule.forRoot([TodoEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      name: 'Todos Demo',
    }),
  ],
  providers: [
    TodolistService,
    { provide: 'jsonplaceholder', useValue: true },
    {
      provide: baseUrl,
      useFactory: (val: boolean) => {
        return val ? 'https://jsonplaceholder.typicode.com' : 'localhost:3000';
      },
      deps: ['jsonplaceholder'],
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TodoInterceptor,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CatcherrorInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
