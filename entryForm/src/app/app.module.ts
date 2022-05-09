import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './stateManagement/login.reducer';
import { ZipcodeDirective } from './zipcode.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    LoginComponent,
    ZipcodeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({login: loginReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
