import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPanelComponent } from './setting-panel/setting-panel.component';



@NgModule({
  declarations: [
    SettingPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SettingPanelComponent
  ]

})
export class SettingModule { }
