import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaginationService } from 'src/app/services/pagination.service';
import { commentUser } from '../models/commentUser.model';
import { News } from '../models/news.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comments!: commentUser[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: News },
    private pagination: PaginationService
  ) {}

  ngOnInit(): void {
    this.comments = this.data.story.comment;
  }

}
