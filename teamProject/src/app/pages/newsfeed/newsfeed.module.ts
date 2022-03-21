import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { StorycardComponent } from 'src/app/components/storycard/storycard.component';
import { LikedstorycardComponent } from 'src/app/components/likedstorycard/likedstorycard.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalContentComponent } from 'src/app/components/modalContent/modalContent.component';


@NgModule({
  declarations: [
    NewsfeedComponent,
    StorycardComponent,
    LikedstorycardComponent,
    ModalContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NewsfeedRoutingModule,
    NzModalModule
  ]
})
export class NewsfeedModule { }
