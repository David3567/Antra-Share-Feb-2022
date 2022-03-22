import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News } from 'src/app/services/interface/news.model';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-showstory',
  templateUrl: './showstory.component.html',
  styleUrls: ['./showstory.component.scss']
})
export class ShowstoryComponent implements OnInit {
  userID="6205f461d5cf1c22aad415a6";
  @Input() story!: News;
  @Output() showstoryEmitter = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ifLiked() : boolean{
    return this.story.likedIdList.find((list)=>list._id === this.userID)? true : false;
  }

  onClick() {
    if(this.story.likedIdList.find((list)=>list._id===this.userID)){
      this.story.likedIdList = this.story.likedIdList.filter((list) => list._id !== this.userID)
    }else{
      this.story.likedIdList.push({_id:this.userID});
    }
    // console.log("liked:", this.story);
    this.showstoryEmitter.emit(this.story._id);
  }

  onShowComments() {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '950px',
      data: {commentlist: this.story.comment},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
