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
import { AuthGuardService } from '../services/auth-guard.service';
import { PoststoryComponent } from './poststory/poststory.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




const route: Routes = [
  { path:'', component: NewsFeedComponent, canLoad: [AuthGuardService]}
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
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressSpinnerModule
];



@NgModule({
  declarations: [
    NewsFeedComponent,
    StoryComponent,
    MaxlengthPipe,
    FavoriteListComponent,
    PoststoryComponent
  ],
  imports: [newsFeedModule, RouterModule.forChild(route)]
})
export class NewsFeedModule { }
