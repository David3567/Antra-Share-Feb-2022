import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { Router } from '@angular/router';

import { newsTemplate } from 'src/app/interfaces/news.model';

import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { JWTDecoderService } from 'src/app/services/jwt-decoder.service';

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

  constructor(
    private dialog: MatDialog,
    private newsService: NewsfeedService,
    private jwtService: JWTDecoderService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  openDialog(story: newsTemplate) {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      data: {
        comment: story.comment,
        _id: story._id
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      location.reload();
    });
  }

  like(id: string) {
    this.likedStoryEmitter.emit(id);
  }

  toggleLike(id: string): boolean {
    return this.likedStories.find((story) => story._id === id) ? true : false;
  }

  deletePost(storyId: string) {
    this.newsService.deletePost(storyId).subscribe((res) => console.log(res["body"]));
    this.deleteStoryEmitter.emit(storyId);
  }

  checkUser(): boolean {
    if (this.jwtService.getCurrentUser().userRole === "admin"
      || this.story.publisherName === this.jwtService.getCurrentUser().userName) {
      return true
    } else {
      return false;
    }
  }

  onProfile(username: string) {
    if (this.checkUser()) {
      this.router.navigate([`profile/${username}`]);
    }
  }
}
