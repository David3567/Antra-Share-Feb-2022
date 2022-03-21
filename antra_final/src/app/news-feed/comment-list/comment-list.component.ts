import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Story } from '../story.interfaces';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() commentlist:any;
  
  constructor(private newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
  }

  

}
