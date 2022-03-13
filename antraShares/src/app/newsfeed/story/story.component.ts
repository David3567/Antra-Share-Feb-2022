import { Component, OnInit, Input, Inject } from '@angular/core';
import { Story } from 'src/app/interfaces/story.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input('story') story! :Story;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Story) { 
    this.story = data;
  }

  ngOnInit(): void {
  }

}
