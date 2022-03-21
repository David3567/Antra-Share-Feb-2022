import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { CommentsPopUpComponent } from './comments-pop-up/comments-pop-up.component';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() likedStories: newsTemplate[] = [];
  @Input() story: newsTemplate;
  @Output() likedStoryEmitter = new EventEmitter<string>();
  

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  like(id: string) {
    this.likedStoryEmitter.emit(id);
  }

  toggleLike(id: string): boolean {
    return this.likedStories.find((story)=> story._id === id) ? true : false;
  }

  showComments(comments) {
    this.dialog.open(CommentsPopUpComponent, {
      data: {comments: comments}
    });
  }

}
