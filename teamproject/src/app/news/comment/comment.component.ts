import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Story } from 'src/app/interface/interface.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() content!: Story;

  
  constructor(@Inject(MAT_DIALOG_DATA) private data:{story: Story}) { }

  ngOnInit(): void {
    this.content = this.data.story;
  }

}
