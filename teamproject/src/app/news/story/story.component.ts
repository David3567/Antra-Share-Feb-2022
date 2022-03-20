import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Story } from 'src/app/interface/interface.model';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() content!: Story;
  // @Output() addlikeEmiter = new EventEmitter();
  // @Output() unlikeEmiter = new EventEmitter();

  @Output() commentEmiter = new EventEmitter();

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  comments(){
    this.commentEmiter.emit(this.content.comment.publisherName);
  }

  onOpenDialog(){
    this.matDialog.open(CommentComponent);
  }

  // addlike(){
  //   this.addlikeEmiter.emit(this.like._id);
  // }

  // unlike(){
  //   this.addlikeEmiter.emit(this.like._id)
  // }

}
