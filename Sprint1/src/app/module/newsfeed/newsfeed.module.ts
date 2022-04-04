import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from 'src/app/module/newsfeed/components/newsfeed/newsfeed.component';
import { StoryComponent } from 'src/app/module/newsfeed/components/showstory/showstory.component';
import { PostStoryComponent } from 'src/app/module/newsfeed/components/poststory/poststory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { LikelistComponent } from 'src/app/module/newsfeed/components/likelist/likelist.component';
import { StoryCommentComponent } from 'src/app/module/newsfeed/components/comment/comment.component';
import { MatIconModule } from '@angular/material/icon';
import { AddCommentComponent } from 'src/app/module/newsfeed/components/add-comment/add-comment.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { VariableValue } from 'src/app/services/variable.service';
@NgModule({
  declarations: [
    NewsfeedComponent,
    StoryComponent,
    PostStoryComponent,

    LikelistComponent,
    StoryCommentComponent,
    AddCommentComponent,
  ],
  exports: [NewsfeedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule,
  ],
  providers: [VariableValue]
})
export class NewsfeedModule {}