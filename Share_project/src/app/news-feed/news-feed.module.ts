import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StoryComponent } from './story/story.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CdkScrollableModule } from '@angular/cdk/scrolling';

const newsFeedModule = [
    CommonModule,
    MatDialogModule,
    ScrollingModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    CdkScrollableModule
];



@NgModule({
  declarations: [
  ],
  imports: [newsFeedModule],
  exports: [newsFeedModule]
})
export class NewsFeedModule { }
