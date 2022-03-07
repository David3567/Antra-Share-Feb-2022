import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { UseritemComponent } from './useritem/useritem.component';
import { AdminComponent } from './admin.component';
import { UserlistService } from './services/userlist.service';



@NgModule({
  declarations: [
    UserlistComponent,
    UseritemComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserlistService
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
