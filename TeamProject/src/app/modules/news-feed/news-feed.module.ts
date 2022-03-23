import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedPageComponent } from './news-feed-page/news-feed-page.component';
import { PostComponent } from './news-feed-page/post/post.component';
import { LikelistComponent } from './news-feed-page/likelist/likelist.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NewsFeedPageComponent, PostComponent, LikelistComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule],
  exports: [NewsFeedPageComponent, PostComponent, LikelistComponent],
})
export class NewsFeedModule { }
