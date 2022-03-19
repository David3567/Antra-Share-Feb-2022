import { HttpClient } from '@angular/common/http';
import { Component, OnInit , ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { first } from 'rxjs/operators'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit, OnDestroy {

  newsList: any;
  likedList: News[] = [];
  subscribeNewsService = new Subscription();
  completed: boolean = false;
  isCollapsed = false;
  visible = false;

  constructor(private httpclient: HttpClient, public newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedservice.getNewsFromDataBase()
      .subscribe(
        (data) => { this.newsList = data }
      )
    this.subscribeNewsService = this.newsfeedservice
    .getLikedList()
    .subscribe((data:any)=>{
      console.log(data)
      this.likedList = data;
      console.log(this.likedList)
    })
  }

  ngOnDestroy(): void {
    this.subscribeNewsService.unsubscribe();
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  addLike(news:News){
    this.newsfeedservice.addToLikeList(news);
  }

  openLikedList(): void {
    this.visible = true;
  }

  closeLikedList(): void {
    this.visible = false;
  }

  deleteLiked(news: News) {
    this.newsfeedservice.deleteFromLikeList(news);
  }

  goToLogin() {
    location.href = "http://localhost:4200/login";
  }
}