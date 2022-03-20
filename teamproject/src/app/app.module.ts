import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {matDialogAnimations, MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { NewsService } from './service/news.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoryComponent } from './news/story/story.component';
import { CommentComponent } from './news/comment/comment.component';
import { LikelistComponent } from './news/likelist/likelist.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    StoryComponent,
    CommentComponent,
    LikelistComponent
  ],
  entryComponents:[
    CommentComponent,
    LikelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
