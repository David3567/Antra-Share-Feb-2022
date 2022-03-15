import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/core/news.service';
import { News } from 'src/app/interface/news.model';

@Component({
  selector: 'app-likes-page',
  templateUrl: './likes-page.component.html',
  styleUrls: ['./likes-page.component.scss']
})
export class LikesPageComponent implements OnInit, OnDestroy {
  newsLikedList: News[] = [];
  subscriptionNews$ = new Subscription();

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.subscriptionNews$ = this.newsService.
    getLikedList().subscribe((data) => {
      this.newsLikedList = data;
    })
  }

  deleteLiked(data: News) {
    this.newsService.RemoveFromLikedList(data);
  }

  ngOnDestroy(): void {
    this.subscriptionNews$.unsubscribe();
  }
}
