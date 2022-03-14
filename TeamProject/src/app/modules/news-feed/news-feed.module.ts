import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { PostnewsComponent } from './newsfeed-page/postnews/postnews.component';
import { StoryComponent } from './newsfeed-page/story/story.component';
import { LikeListComponent } from './newsfeed-page/like-list/like-list.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LikedStoryComponent } from './newsfeed-page/like-list/liked-story/liked-story.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewsfeedPageComponent,
    PostnewsComponent,
    StoryComponent,
    LikeListComponent,
    LikedStoryComponent,
    
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    NewsfeedPageComponent
  ]
})
export class NewsFeedModule { }
