import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SettingPageComponent } from './setting-page/setting-page.component';



@NgModule({
  declarations: [
    SettingPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SettingPageComponent
  ]
})
export class SettingModule { }
