import { Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { SidenevService } from 'src/app/services/sidenev.service';
import { News } from '../models/news.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  @ViewChild('favorite-drawer') sidenav!: MatSidenav;
  @Input() likedStory!: News;


  constructor(private sidenaveservice: SidenevService, private route: ActivatedRoute) { 
    route.params.subscribe(val => {
      this.sidenaveservice.setSideNav(this.sidenav);
    })
    
  }

  ngOnInit(): void {
    console.log(this.likedStory)
  }



}
