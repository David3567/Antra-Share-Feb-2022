import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class SharedModule { }
