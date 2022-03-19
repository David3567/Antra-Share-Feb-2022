import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/interfaces/story.model';
import { StoryService } from 'src/app/services/story.service';
import { MatDialog } from '@angular/material/dialog';
import { StoryCommentComponent } from '../story-comment/story-comment.component';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  @Input('inStory') storyDetail!: Story;

  constructor(private storyService: StoryService, public dialog: MatDialog) {}

  ngOnInit(): void {}
  addToLikeList(story: Story) {
    this.storyService.pushIntoLikeList(story);
  }
  onClickComment(story: Story) {
    const dialogRef = this.dialog.open(StoryCommentComponent, {
      height: '70%',
      width: '50%',
      data: {
        story: story,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
