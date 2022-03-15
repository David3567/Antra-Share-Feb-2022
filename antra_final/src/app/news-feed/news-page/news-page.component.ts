import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/core/news.service';
import { News } from 'src/app/interface/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {
  newslist: News[] = [];
  subscriptionNews$!: Subscription;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.subscriptionNews$ = this.newsService.getAllNews().subscribe((data: News[]) => {
      this.newslist = data;
  })
 }

  ngOnDestroy(): void {
    this.subscriptionNews$.unsubscribe();
  }

}
