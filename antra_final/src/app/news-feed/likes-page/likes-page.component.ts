import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/core/news.service';

@Component({
  selector: 'app-likes-page',
  templateUrl: './likes-page.component.html',
  styleUrls: ['./likes-page.component.scss']
})
export class LikesPageComponent implements OnInit, OnDestroy {
  newsLikedList: any[] = [];
  subscriptionNews$ = new Subscription();

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.subscriptionNews$ = this.newsService.
    getLikedList().subscribe((data) => {
      this.newsLikedList = data;
    })
  }

  deleteLiked(data: any) {
    this.newsService.RemoveFromLikedList(data);
  }

  ngOnDestroy(): void {
    this.subscriptionNews$.unsubscribe();
  }
}
