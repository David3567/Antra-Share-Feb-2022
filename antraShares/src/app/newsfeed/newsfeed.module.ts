import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { StoryComponent } from './story/story.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatDialogModule } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [NewsfeedComponent, StoryComponent],
  exports: [NewsfeedComponent],
  imports: [
    CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatGridListModule, MatDialogModule
  ]
})
export class NewsfeedModule { }
