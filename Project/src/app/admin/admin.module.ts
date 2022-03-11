import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from './admin.service';
import { UserInfoPanelComponent } from './user-info-panel/user-info-panel.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AdminPageComponent,
    UserInfoPanelComponent
  ],
  imports: [
    CommonModule,BrowserModule,FormsModule, HttpClientModule,
    MatGridListModule,MatListModule, MatDividerModule
  ],
  providers: [
    AdminService,
  ],
  exports: [
    AdminPageComponent,
    UserInfoPanelComponent
  ],
  
})
export class AdminModule { }
