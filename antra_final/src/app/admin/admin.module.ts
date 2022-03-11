import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserInfoPanelComponent } from './user-info-panel/user-info-panel.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    UserInfoPanelComponent,
    UserItemComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminPageComponent,
    UserInfoPanelComponent,
    UserItemComponent,
    UserDetailComponent
  ]
})
export class AdminModule { }
