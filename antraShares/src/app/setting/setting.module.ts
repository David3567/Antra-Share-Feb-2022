import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';



@NgModule({
  declarations: [SettingComponent],
  exports:[SettingComponent],
  imports: [
    CommonModule
  ]
})
export class SettingModule { }
