import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserInfoPanelComponent } from './admin-page/user-info-panel/user-info-panel.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    UserInfoPanelComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AdminPageComponent
  ],
})
export class AdminModule { }
