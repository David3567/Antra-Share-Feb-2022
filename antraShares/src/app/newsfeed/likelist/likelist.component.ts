import { Component, OnInit,OnDestroy } from '@angular/core';
import { Story } from 'src/app/interfaces/story.model';
import { StoryService } from 'src/app/services/story.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.css']
})
export class LikelistComponent  implements OnInit, OnDestroy {
  likeListStories!: Story[];
  subscribeStoryService = new Subscription();


  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    // like list
    this.subscribeStoryService = this.storyService.subjectLikeList$.subscribe(
      (story: any) => {
        console.log("data1  :"+ story);
        this.likeListStories = story;
        console.log("books: ", this.likeListStories);
        console.log("books: ", typeof(this.likeListStories));
      }
    );
    
  }
  ngOnDestroy(): void {
    this.subscribeStoryService.unsubscribe();
  }
  onRemoveLike(story:Story){
    console.log(123)
    this.storyService.removeNewsFromLikeList(story);
  }
 
}

