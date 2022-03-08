import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';




const AdminMaterialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ];


@NgModule({
  declarations: [
  ],
  imports: [AdminMaterialModules],
  exports: [AdminMaterialModules]
})
export class AdminModule { }
