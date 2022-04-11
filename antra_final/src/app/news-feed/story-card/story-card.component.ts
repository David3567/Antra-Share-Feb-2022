import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Story} from '../story.interfaces';
import {MatDialog} from '@angular/material/dialog';
import { CommentComponent } from '../comment/comment.component';
import { Variables } from 'src/app/core/globalVariable';


@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() storiesdetail!: Story;
  liked: boolean = false;

  constructor(private newsfeedservice:NewsfeedService,
    public dialog: MatDialog,
    public variable: Variables ) { }

  ngOnInit(): void {
  }

  showComment(){
    this.dialog.open(CommentComponent,{
      width: '600px',
      height:'700px',
      data: { comment: this.storiesdetail.comment,
      id: this.storiesdetail._id}
    })
  }

  onLiked(data:Story){
    this.liked = !this.liked;
    if (this.liked === true) {
      if (this.variable.removed.indexOf(data._id) !== -1) {
        this.liked = !this.liked;
        this.variable.removed = this.variable.removed.filter(
          (ele) => ele !== data._id
        );
      }
      this.newsfeedservice.pushToLikedList(data);
    } else {
      this.newsfeedservice.removeFromLikedList(data);
    }
  }

}

