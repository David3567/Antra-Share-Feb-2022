import { Component, Input, OnInit } from '@angular/core';
// import { Story } from 'src/app/interfaces/story.model';
import { StoryService } from 'src/app/services/story.service';



@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input('inStory') storyDetail! : any
  
  likeBtn : string = "Like me"
  constructor(private storyService : StoryService) { }

  ngOnInit(): void {
  }
  addToLikeList(story:any){
    // console.log(storyDetail._id);
    
    this.storyService.pushIntoLikeList(story);
    
  }
}