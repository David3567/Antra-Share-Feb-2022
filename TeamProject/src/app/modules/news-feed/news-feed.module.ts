import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { PostNewStoryComponent } from './newsfeed-page/post-new-story/post-new-story.component';
import { StoryCardComponent } from './newsfeed-page/story-card/story-card.component';
import { NavbarComponent } from './newsfeed-page/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NewsfeedPageComponent,
    PostNewStoryComponent,
    StoryCardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NewsfeedPageComponent
  ]
})
export class NewsFeedModule { }
