import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserInfoPanelComponent } from './admin-page/user-info-panel/user-info-panel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdminPageComponent, UserInfoPanelComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [AdminPageComponent, UserInfoPanelComponent],
})
export class AdminModule {}
