import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path:'', component: AdminComponent}
]

const AdminMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonModule
  ];


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    UserinfoComponent
  ],
  imports: [AdminMaterialModules, RouterModule.forChild(routes)]
})
export class AdminModule { }
