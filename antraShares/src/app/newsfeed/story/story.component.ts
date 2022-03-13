import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/interfaces/story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input('inStory') storyDetail! : Story
  constructor() { }

  ngOnInit(): void {
  }

}
