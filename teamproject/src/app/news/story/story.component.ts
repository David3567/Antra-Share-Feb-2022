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

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onOpenDialog(story: Story) {
    const dialogRef = this.matDialog.open(CommentComponent, {
      data: {
        story: story,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }

  // addlike(){
  //   this.addlikeEmiter.emit(this.like._id);
  // }

  // unlike(){
  //   this.addlikeEmiter.emit(this.like._id)
  // }

}
