import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SettingPanelComponent } from './setting-panel/setting-panel.component';

@NgModule({
  declarations: [
    SettingPanelComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    SettingPanelComponent
  ]
})
export class SettingModule { }
