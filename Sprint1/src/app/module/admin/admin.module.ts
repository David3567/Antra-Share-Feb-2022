import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserlistService } from 'src/app/services/userlist.service';
import { UserlistComponent } from './components/userlist/userlist.component';

@NgModule({
  declarations: [AdminComponent, UserinfoComponent, UserlistComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [UserlistService],
})
export class AdminModule {}
