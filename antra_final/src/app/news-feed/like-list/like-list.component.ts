import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ElementRef,ViewChild, Input} from '@angular/core';
import { Story } from '../interfaces';
import { NewsfeedService } from 'src/app/core/newsfeed.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.css']
})
export class LikeListComponent implements OnInit {
  @Input() likedetails!:Story;
  constructor(private newsfeedservice:NewsfeedService) { }

  ngOnInit(): void {
    console.log(this.likedetails);
  }
  removeliked(data:Story){
    this.newsfeedservice.removeFromLikedList(data);
  }

}
