import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
