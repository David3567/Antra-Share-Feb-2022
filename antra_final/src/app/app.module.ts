import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { UserInfoPanelComponent } from './admin/user-info-panel/user-info-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './admin/user-item/user-item.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    UserInfoPanelComponent,
    UserItemComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
