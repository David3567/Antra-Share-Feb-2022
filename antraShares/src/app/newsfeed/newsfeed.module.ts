import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { LikelistComponent } from './likelist/likelist.component';

@NgModule({
  declarations: [NewsfeedComponent, LikelistComponent],
  exports: [NewsfeedComponent],
  imports: [
    CommonModule
  ]
})
export class NewsfeedModule { }
