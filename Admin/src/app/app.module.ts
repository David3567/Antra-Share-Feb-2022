import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AdminService } from './admin.service';
import { UsertagComponent } from './usertag/usertag.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserinfoComponent,
    UsertagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
