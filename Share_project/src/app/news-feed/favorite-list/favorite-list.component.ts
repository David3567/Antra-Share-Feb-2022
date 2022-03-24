import { Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { News } from '../models/news.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
})
export class FavoriteListComponent implements OnInit {
  @Input() likedStory!: News;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.likedStory);
  }
}
