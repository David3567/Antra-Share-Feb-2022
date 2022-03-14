import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { NewsdataService } from 'src/app/services/newsdata.service';

@Component({
  selector: 'app-news-feed-page',
  templateUrl: './news-feed-page.component.html',
  styleUrls: ['./news-feed-page.component.css'],
})
export class NewsFeedPageComponent implements OnInit {
  status: boolean = false;
  news$: Observable<newsTemplate[]>;

  constructor(private newsData: NewsdataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.news$ = this.newsData.getNews();
  }

  onClick() {
    this.status = !this.status;
  }
}
