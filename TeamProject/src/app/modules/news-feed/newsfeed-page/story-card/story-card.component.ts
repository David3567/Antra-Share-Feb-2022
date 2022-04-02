import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { LoginService } from 'src/app/services/login.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css'],
})
export class StoryCardComponent implements OnInit {
  @Input() likedStories: newsTemplate[] = [];
  @Input() story: newsTemplate;
  @Output() likedStoryEmitter = new EventEmitter<string>();
  @Output() deleteStoryEmitter = new EventEmitter<string>();

  currentUser: any;

  constructor(
    private dialog: MatDialog,
    private newsService: NewsfeedService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('bearerToken');
    if (token) {
      let decoded = jwt_decode(token);
      console.log('data: ', decoded);
    }
    // this.loginService.getCurrentUser().subscribe(user => {
    //   console.log('in the story card: ', user);
    // });
    // console.log('in the story card: ', this.loginService.currentUser);
  }

  openDialog(story: newsTemplate) {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      data: {
        comment: story.comment,
        _id: story._id
      },
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  like(id: string) {
    this.likedStoryEmitter.emit(id);
  }

  toggleLike(id: string): boolean {
    return this.likedStories.find((story) => story._id === id) ? true : false;
  }

  deletePost(storyId: string) {
    this.newsService.deletePost(storyId).subscribe(console.log);
    this.deleteStoryEmitter.emit(storyId);
  }

  checkUser() {
    // return this.story.publisherName === this.loginService.currentUser.userName;
  }
}
