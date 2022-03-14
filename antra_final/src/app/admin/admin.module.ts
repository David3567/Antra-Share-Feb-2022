import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserInfoPanelComponent } from './user-info-panel/user-info-panel.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminPageComponent,
    UserInfoPanelComponent,
    UserItemComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule
  ],
  exports: [
    AdminPageComponent,
    UserInfoPanelComponent,
    UserItemComponent,
    UserDetailComponent
  ]
})
export class AdminModule { }
