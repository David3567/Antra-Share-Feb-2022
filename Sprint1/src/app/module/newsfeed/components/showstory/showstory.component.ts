import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from 'src/app/services/interface/news.model';

@Component({
  selector: 'app-showstory',
  templateUrl: './showstory.component.html',
  styleUrls: ['./showstory.component.scss']
})
export class ShowstoryComponent implements OnInit {
  userID="6205f461d5cf1c22aad415a6";
  @Input() story!: News;
  // @Output() likedStoryEmitter = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ifLiked() : boolean{
    return this.story.likedIdList.find((list)=>list._id === this.userID)? true : false;
  }

  onClick() {
    if(this.story.likedIdList.find((list)=>list._id===this.userID)){
      this.story.likedIdList = this.story.likedIdList.filter((list) => list._id !== this.userID)
    }else{
      this.story.likedIdList.push({_id:this.userID});
    }
    console.log("liked:", this.story);
    // this.likedStoryEmitter.emit(this.story);
  }
}
