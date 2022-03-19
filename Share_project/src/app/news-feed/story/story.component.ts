import { Component, OnInit, Input } from '@angular/core';
import { News } from '../models/news.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() storyItem!: News;

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.storyItem);
  }

}
