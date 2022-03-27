import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { StoryComponent } from './story/story.component';
import { PostStoryComponent } from './post-story/post-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { LikelistComponent } from './likelist/likelist.component';
import { StoryCommentComponent } from './story-comment/story-comment.component';
import { MatIconModule } from '@angular/material/icon';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  declarations: [
    NewsfeedComponent,
    StoryComponent,
    PostStoryComponent,

    LikelistComponent,
    StoryCommentComponent,
    AddCommentComponent,
  ],
  exports: [NewsfeedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
  ],
})
export class NewsfeedModule {}
