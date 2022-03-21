import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormsModule, ReactiveFormsModule
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { RangePipe } from '../pipe/range.pipe';

@NgModule({
  declarations: [ProfileComponent, RangePipe],
  exports: [ProfileComponent],
  imports: [
    CommonModule, MatSelectModule, MatRadioModule, MatCardModule, MatInputModule, MatIconModule, MatButtonModule, MatGridListModule, FormsModule, ReactiveFormsModule, MatFormFieldModule
  ]
})
export class ProfileModule { }
