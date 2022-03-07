import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoPanelComponent } from './user-info-panel/user-info-panel.component';
import { AdminPageComponent } from './admin-page/admin-page.component';



@NgModule({
  declarations: [
    AdminPageComponent,
    UserInfoPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
