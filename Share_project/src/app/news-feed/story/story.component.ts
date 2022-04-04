import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News } from '../models/news.model';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  likeStatus: string = "unlike";
  commentLength!: number;

  @Input() storyItem!: News;

  constructor(
    public dialog: MatDialog,
  ) {
   }

  ngOnInit(): void {
    this.commentLength = this.storyItem.comment.length
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

}
