import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { StorycardComponent } from 'src/app/components/storycard/storycard.component';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    NewsfeedComponent,
    StorycardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NewsfeedRoutingModule,
    NzModalModule
  ]
})
export class NewsfeedModule { }
