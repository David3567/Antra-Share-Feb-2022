import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StoryComponent } from './story/story.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NewsFeedComponent } from './news-feed.component';
import { MaxlengthPipe } from './pipe/maxlength.pipe';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



const route: Routes = [
  { path:'', component: NewsFeedComponent}
]

const newsFeedModule = [
    CommonModule,
    MatDialogModule,
    ScrollingModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    InfiniteScrollModule,
    MatProgressBarModule,
    MatButtonModule
];



@NgModule({
  declarations: [
    NewsFeedComponent,
    StoryComponent,
    MaxlengthPipe,
    FavoriteListComponent
  ],
  imports: [newsFeedModule, RouterModule.forChild(route)]
})
export class NewsFeedModule { }
