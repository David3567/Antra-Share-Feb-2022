import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    UserinfoComponent,
    UserlistComponent,
    AdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
