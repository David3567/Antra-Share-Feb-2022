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

@NgModule({
  declarations: [
    NewsfeedComponent,
    LikelistComponent,
    PoststoryComponent,
    ShowstoryComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [NewsfeedService],
})
export class NewsfeedModule {}
