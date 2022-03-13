import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { StoryComponent } from './story/story.component';
import { PostStoryComponent } from './post-story/post-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { LikeListComponent } from './likelist/likelist.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [NewsfeedComponent, StoryComponent, PostStoryComponent, LikeListComponent],
  exports: [NewsfeedComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class NewsfeedModule { }
