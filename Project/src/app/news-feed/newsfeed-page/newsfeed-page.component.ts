import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { observable,from, fromEvent,of } from 'rxjs';
import { filter,map } from 'rxjs';
import { Story } from '../interfaces';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit {
  Storieslist!: Story[];
  constructor(private newsfeedservice:NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedservice.getStoris().subscribe((data: Story[])=>{
      this.Storieslist = data;
    })
  }

}


