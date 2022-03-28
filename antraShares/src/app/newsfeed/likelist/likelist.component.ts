import { Component, OnInit, OnDestroy } from '@angular/core';
import { Story } from 'src/app/interfaces/story.model';
import { StoryService } from 'src/app/services/story.service';
import { Subscription } from 'rxjs';
import { VariableValue } from 'src/app/services/variable.service';
@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.css'],
})
export class LikelistComponent implements OnInit, OnDestroy {
  likeListStories!: Story[];
  subscribeStoryService = new Subscription();

  constructor(
    private storyService: StoryService,
    public variable: VariableValue
  ) {}

  ngOnInit(): void {
    // like list
    this.subscribeStoryService = this.storyService.subjectLikeList$.subscribe(
      (story: any) => {
        console.log(story)
        this.likeListStories = story;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscribeStoryService.unsubscribe();
  }
  onRemoveLike(story: Story) {
    this.variable.remove.push(story._id);

    this.storyService.removeNewsFromLikeList(story);
  }
}
