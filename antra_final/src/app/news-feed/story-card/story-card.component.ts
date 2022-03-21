import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Story} from '../story.interfaces';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommentComponent } from '../comment/comment.component';


@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() storiesdetail!: Story;
  commentStatus!:boolean;
  //comments:Comment[] = this.storiesdetail.comment;

  //commentNum:number = this.comments.length;
  likeNum:number = 0;
  constructor(private newsfeedservice:NewsfeedService, public dialog: MatDialog ) { }
  ngOnInit(): void {
  }

  showComment(){
    this.dialog.open(CommentComponent,{
      data: this.storiesdetail.comment
    })
  }
  liked(data:Story){
    this.newsfeedservice.pushToLikedList(data);
  }

}

