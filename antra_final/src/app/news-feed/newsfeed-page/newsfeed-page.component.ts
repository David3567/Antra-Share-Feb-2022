import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Story } from '../story.interfaces';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/login.service';
import { StoryCardComponent } from '../story-card/story-card.component';
import { DeleteService } from 'src/app/core/delete.service';
import { debounceTime } from "rxjs/operators";

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

  constructor(
    private deleteservice: DeleteService,
    private newsfeedservice: NewsfeedService,
    private loginservice: LoginService) { }

  ngOnInit (): void {

    this.subsciptionStories$ = this.newsfeedservice.getStoris().subscribe((data: Story[])=>{
      this.Storieslist = data.reverse();
    })
    this.currentUser = this.loginservice.getCurrentUsername();
    this.currentUserRole = this.loginservice.getCurrentUserRole();
  }

  openDialog(){}

  ngOnDestroy(): void {
    this.subsciptionStories$.unsubscribe();
  }

  onDeleteStory(id: string) {
    this.deleteservice.deletePost(id).subscribe((data: any) => {
      console.log(data);
      this.Storieslist = this.Storieslist.filter(
        (data) => data._id !== id);
    });
  }

  updateStory() {
    //debounceTime(2000);
    this.subsciptionStories$ = this.newsfeedservice.getStoris().pipe(debounceTime(1000)).subscribe((data: Story[])=>{
      this.Storieslist = data.reverse();
    })
  }
}