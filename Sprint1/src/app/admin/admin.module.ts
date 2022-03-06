import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [AdminComponent, UserinfoComponent, UserlistComponent],
  imports: [CommonModule],
})
export class AdminModule {}
