import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserInfoPanelComponent } from './userInfoPanel/userInfoPanel.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AdminPageComponent,
    UserInfoPanelComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class AdminModule {
}
