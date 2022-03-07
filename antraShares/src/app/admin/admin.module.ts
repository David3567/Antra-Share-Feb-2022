import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminPageComponent } from './adminPage/adminPage.component';
import { UserInfoPanelComponent } from './userInfoPanel/userInfoPanel.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule } from '@angular/material/button';
import { UserinforService } from "../services/userinfor.service";


@NgModule({
  declarations: [AdminComponent, AdminPageComponent, UserInfoPanelComponent],
  imports: [
    CommonModule, CdkAccordionModule, MatButtonModule
  ],
  exports: [
    AdminComponent,
    AdminPageComponent,
    UserInfoPanelComponent,
  ],
  providers: [UserinforService],
  bootstrap: [AdminComponent]
})
export class AdminModule {
}
