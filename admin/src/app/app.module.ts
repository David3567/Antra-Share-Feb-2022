import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserlistService } from './service/userlist.service';
import { AdminpageComponent } from './adminpage/adminpage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    UserlistComponent,
    AdminpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
