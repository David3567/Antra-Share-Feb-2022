import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News } from '../models/news.model';
import { CommentComponent } from '../comment/comment.component';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import * as StoryActions from 'src/app/news-feed/ngrx/news.action';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  likeStatus: string = "unlike";
  currentUser: string;

  @Input() storyItem!: News;

  constructor(
    public dialog: MatDialog,
    private service: NewsfeedService,
    private authService: AuthService,
    private store: Store
  ) {
    this.currentUser = this.authService.getUserInfo().userName;
   }

  ngOnInit(): void {
    console.log(this.storyItem);
  }

  likeClick() {
    if(this.likeStatus === "unlike") {
      this.likeStatus = "like";
      this.storyItem.likedIdList.push("1");
    }
    else if (this.likeStatus === "like") {
      this.likeStatus = "unlike";
      this.storyItem.likedIdList.shift();
    }
    console.log(this.storyItem.likedIdList);
  }

  onClickComment(story: News) {
    const dialogRef = this.dialog.open(CommentComponent, {
      height: 'clamp(400px, 700px, 1000px)',
      width: 'clamp(400px, 700px, 1000px)',
      data: {
        story: story,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  checkPostOwner() {
    return this.currentUser === this.storyItem.publisherName ? true : false;
  }

  deletePost() {
    this.store.dispatch(StoryActions.deleteStory({id: this.storyItem._id}));
    // this.service.deleteStory(this.storyItem._id!);
  }

}
