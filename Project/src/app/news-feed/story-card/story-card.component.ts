import { Component, Input, OnInit } from '@angular/core';
import { Story,Comment } from '../interfaces';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() storiesdetail!: Story;

  //comments:Comment[] = this.storiesdetail.comment;

  //commentNum:number = this.comments.length;
  likeNum:number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.storiesdetail);
  }


}
