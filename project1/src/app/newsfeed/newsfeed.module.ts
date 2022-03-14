import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedPageComponent } from './newsfeed-page/newsfeed-page.component';
import { PostNewsComponent } from './postNews/postNews.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewsfeedPageComponent,
    PostNewsComponent
  ]
})
export class NewsfeedModule { }
