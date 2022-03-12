import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { PostnewsComponent } from './newsfeed-page/postnews/postnews.component';
import { StoryComponent } from './newsfeed-page/story/story.component';



@NgModule({
  declarations: [
    NewsfeedPageComponent,
    PostnewsComponent,
    StoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsFeedModule { }
