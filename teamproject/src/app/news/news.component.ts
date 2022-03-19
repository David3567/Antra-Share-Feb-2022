import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Story } from '../interface/interface.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newslist!: Story[];
  story!: Story;
  likelist: Story[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void { 
    this.newsService.getNews().subscribe((data: any) =>{
      this.newslist = data;
    })
  }

  unlike(id:string){
    console.log(id);
    this.newslist = this.newslist.filter((user) => user._id !== id);
  }

  addlike(news:Story){
    console.log(news);
    this.likelist.push(news);
  }

}
