import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { Story } from '../interfaces';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.css']
})
export class LikeListComponent implements OnInit {
  Likedlist!: Story[];
  constructor(private newsfeedservice:NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedservice.getLikedList().subscribe((data: Story[])=>{
      this.Likedlist = data;
    })
  }

}
