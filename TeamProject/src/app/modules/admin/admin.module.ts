import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserInfoPanelComponent } from './admin-page/user-info-panel/user-info-panel.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    UserInfoPanelComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    AdminPageComponent
  ],
})
export class AdminModule { }
