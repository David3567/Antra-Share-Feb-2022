import { Component, Inject, OnInit } from '@angular/core';
import { Story } from 'src/app/interfaces/story.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css'],
})
export class StoryCommentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: Story }
  ) {}
  singleStory!: Story;

  ngOnInit(): void {
    this.singleStory = this.data.story;
    console.log(this.singleStory .comment)
  }
}
