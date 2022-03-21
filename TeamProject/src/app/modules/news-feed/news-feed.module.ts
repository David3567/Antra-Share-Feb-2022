import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { PostNewStoryComponent } from './newsfeed-page/post-new-story/post-new-story.component';
import { StoryCardComponent } from './newsfeed-page/story-card/story-card.component';
import { LikeListComponent } from './newsfeed-page/like-list/like-list.component';
import { LikedStoryComponent } from './newsfeed-page/like-list/liked-story/liked-story.component';
import { CommentDialogComponent } from './newsfeed-page/story-card/comment-dialog/comment-dialog.component';

@NgModule({
  declarations: [
    NewsfeedPageComponent,
    PostNewStoryComponent,
    StoryCardComponent,
    LikeListComponent,
    LikedStoryComponent,
    CommentDialogComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [NewsfeedPageComponent],
})
export class NewsFeedModule {}
