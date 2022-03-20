import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { LikelistComponent } from './likelist/likelist.component';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    NewsfeedComponent, LikelistComponent
  ],
  imports: [
    CommonModule, MatIconModule
  ]
})
export class NewsfeedModule { }
