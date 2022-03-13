import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [ProfileComponent],
  exports:[ProfileComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatGridListModule
  ]
})
export class ProfileModule { }
