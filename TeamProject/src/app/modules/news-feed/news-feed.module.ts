import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { PostNewStoryComponent } from './newsfeed-page/post-new-story/post-new-story.component';
import { StoryCardComponent } from './newsfeed-page/story-card/story-card.component';
import { NavbarComponent } from './newsfeed-page/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LikeListComponent } from './newsfeed-page/like-list/like-list.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LikedStoryComponent } from './newsfeed-page/like-list/liked-story/liked-story.component';

@NgModule({
  declarations: [
    NewsfeedPageComponent,
    PostNewStoryComponent,
    StoryCardComponent,
    NavbarComponent,
    LikeListComponent,
    LikedStoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    NewsfeedPageComponent
  ]
})
export class NewsFeedModule { }
