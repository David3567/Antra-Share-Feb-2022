import { Component, Inject, OnInit } from '@angular/core';
import { Comment, Story } from 'src/app/interfaces/story.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css'],
})
export class StoryCommentComponent implements OnInit {
  current = 0;
  comments!: Comment[];
  commentsPerpage!:Comment[];
  size = 3;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: Story }
  ) {
    console.log("constructor");
    this.comments =this.data.story.comment
  }
  ngOnInit(): void {
    console.log("ngOnInit");
    console.log(this.comments)
    // this.comments = this.data.story.comment
    // this.comments = this.paginate(this.current,this.commentPerPage)
    this.commentsPerpage = [...this.comments.slice(this.current,this.size)];
    console.log(this.commentsPerpage);
  }
  onNext(page:number){
    // this.current = page + 1;
    // this.comments = this.paginate(this.current,this.commentPerPage)
    this.current = this.current +page;
    this.size = this.size+page;
    this.commentsPerpage = [...this.comments.slice(this.current,this.size)];
    console.log(this.commentsPerpage)
  }
  paginate (current:number, perPage : number){
    return [...this.comments.slice((current - 1) * perPage).slice(0, perPage)]
  }
  
}
