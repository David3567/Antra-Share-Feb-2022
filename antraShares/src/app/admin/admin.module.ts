import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserinfoComponent } from './userinfo/userinfo.component';



@NgModule({
  declarations: [AdminComponent, UserinfoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
