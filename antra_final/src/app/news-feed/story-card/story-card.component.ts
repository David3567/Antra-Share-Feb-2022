import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Story} from '../story.interfaces';


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
  constructor(private newsfeedservice:NewsfeedService) { }
  ngOnInit(): void {
    console.log(this.storiesdetail);
  }

  showComment(){
    this.commentStatus = true;
  }
  liked(data:Story){
    this.newsfeedservice.pushToLikedList(data);
  }
 
}

