import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikelistComponent } from './components/likelist/likelist.component';
import { MatIconModule } from '@angular/material/icon';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { PoststoryComponent } from './components/poststory/poststory.component';
import { ShowstoryComponent } from './components/showstory/showstory.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { CommentComponent } from './components/comment/comment.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    NewsfeedComponent,
    LikelistComponent,
    PoststoryComponent,
    ShowstoryComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [NewsfeedService],
})
export class NewsfeedModule {}
