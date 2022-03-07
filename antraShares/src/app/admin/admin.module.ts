import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersListComponent } from "./usersList/usersList.component";
import { UserinforService } from "../services/userinfor.service";
import { HttpClientModule } from '@angular/common/http';
import { CurrentUserInfoComponent } from "../admin/currentUserInfo/currentUserInfo.component";
@NgModule({
  declarations: [AdminComponent, UsersListComponent, CurrentUserInfoComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    AdminComponent, UsersListComponent
  ],
  providers: [UserinforService]
})
export class AdminModule { }
