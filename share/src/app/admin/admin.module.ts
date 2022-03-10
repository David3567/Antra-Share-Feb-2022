import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin.component';
import { UserslistService } from '../services/userslist.service';
import { UserslistComponent } from './userslist/userslist.component';
import { UserdetailComponent } from './userdetail/userdetail.component';



@NgModule({
  declarations: [
    AdminComponent,
    UserslistComponent,
    UserdetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserslistService
  ]
})
export class AdminModule { }
