import { Component, OnDestroy, OnInit} from '@angular/core';
import { Story } from '../story.interfaces';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit, OnDestroy {
  Storieslist!: Story[];
  subsciptionStories$ = new Subscription();
  currentUser: string = '';
  currentUserRole: string = '';

  constructor(private newsfeedservice: NewsfeedService,
    private loginservice: LoginService) { }

  ngOnInit (): void {
    this.subsciptionStories$ = this.newsfeedservice.getStoris().subscribe((data: Story[])=>{
      this.Storieslist = data;
    })

    this.currentUser = this.loginservice.getCurrentUsername();
    // console.log(this.currentUser);
    this.currentUserRole = this.loginservice.getCurrentUserRole();
  }
  openDialog(){}

  ngOnDestroy(): void {
    this.subsciptionStories$.unsubscribe();
  }
}


