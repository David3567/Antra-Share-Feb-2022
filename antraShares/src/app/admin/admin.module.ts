import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  {path: 'userinf/:id', component: AdminComponent}

]

@NgModule({
  declarations: [AdminComponent, UserinfoComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports:[
    AdminComponent,UserinfoComponent
  ],
  
})
export class AdminModule { }
