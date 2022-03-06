import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { AdminComponent } from './admin.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserlistService } from './services/userlist.service';

@NgModule({
  declarations: [AdminComponent, UserinfoComponent, UserlistComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [UserlistService],
})
export class AdminModule {}
