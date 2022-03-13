import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [SettingComponent],
  exports:[SettingComponent],
  imports: [
    CommonModule, MatButtonModule, MatCardModule, MatGridListModule, MatIconModule
  ]
})
export class SettingModule { }
