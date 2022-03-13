import { Component, OnInit, Input, Inject } from '@angular/core';
import { Story } from 'src/app/interfaces/story.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.css']
})
export class LikeListComponent implements OnInit {

  @Input('stories') stories!: Story[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: Story[]) {
    this.stories = data;
    console.log(data)
  }

  onDeleteBtn(story: Story) {
    this.stories = this.stories.filter(t => t._id !== story._id)
  }

  ngOnInit(): void {
  }

}
