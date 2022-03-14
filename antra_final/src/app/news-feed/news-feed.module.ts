import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { LikesPageComponent } from './likes-page/likes-page.component';
import { RouterModule } from '@angular/router';
import { ShortenPipe } from '../core/shorten.pipe';



@NgModule({
  declarations: [
    NewsPageComponent,
    NewsItemComponent,
    LikesPageComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    NewsPageComponent,
    NewsItemComponent,
    LikesPageComponent,
    

  ]
})
export class NewsFeedModule { }
