import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { LikeListComponent } from './like-list/like-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { SharedModule } from '../shared/shared.module';
import { CommentComponent } from './comment/comment.component';
import { ShortenPipe } from '../core/shorten.pipe';

@NgModule({
  declarations: [
    NewsfeedPageComponent,
    StoryCardComponent,
    PostCardComponent,
    LikeListComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule

  ],
  exports: [
    NewsfeedPageComponent,
    StoryCardComponent,
    PostCardComponent,
    LikeListComponent
  ],
  // providers: [
  //   NewsfeedService
  // ]
})
export class NewsFeedModule { }
