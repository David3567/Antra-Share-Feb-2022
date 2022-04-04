import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { Router } from '@angular/router';
import { JWTDecoderService } from 'src/app/services/jwt-decoder.service';
import { UsersService } from 'src/app/services/users.service';

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
    private decoderService: JWTDecoderService,
    private profileService: UsersService,
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
    this.newsService.deletePost(storyId).subscribe((res) => console.log(res["body"]));
    this.deleteStoryEmitter.emit(storyId);
  }

  checkUser(): boolean {
    if (this.decoderService.getCurrentUser().userRole === "admin"
      || this.story.publisherName === this.decoderService.getCurrentUser().userName) {
      return true
    } else {
      return false;
    }
  }

  onProfile(username: string) {
    console.log(username)
    if (this.checkUser()) {
      
      console.log("After");
      this.router.navigate([`profile/${username}`]);
    }
  }
}
