import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserInfoPanelComponent } from './admin-page/user-info-panel/user-info-panel.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    UserInfoPanelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AdminPageComponent
  ],
})
export class AdminModule { }
