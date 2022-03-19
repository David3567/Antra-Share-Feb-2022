import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
//import { LikelistComponent } from './likelist/likelist.component';
import {MatIconModule} from '@angular/material/icon'
import { SharedModule } from 'src/app/shared/shared.module';
import { StorycardComponent } from 'src/app/component/storycard/storycard.component';
import { LikedstorycardComponent } from 'src/app/component/likedstorycard/likedstorycard.component';

@NgModule({
  declarations: [
    NewsfeedComponent,
    StorycardComponent,
    LikedstorycardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]

})
export class NewsfeedModule { }
