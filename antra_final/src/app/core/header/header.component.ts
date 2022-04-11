import { Component, OnInit } from '@angular/core';

import { LikeListComponent } from 'src/app/news-feed/like-list/like-list.component';
import { NewsfeedService } from '../newsfeed.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private newsfeedservice: NewsfeedService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showLikedList() {
    this.dialog.open(LikeListComponent, {
      width: '250px',
      position: { right: '0',
                  top: '50px'},
      // data: this.LikedList
    })
  }
}
