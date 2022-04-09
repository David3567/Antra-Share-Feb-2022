import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Story } from '../../interface/story.interfaces';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/login.service';
import { DeleteService } from 'src/app/core/delete.service';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit, OnDestroy {

  Storieslist: Story[] = [];
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

  onUpdateStory(object: any) {
    // this.Storieslist = this.Storieslist.unshift(object);
    this.Storieslist.unshift(object);
    
    console.log(this.Storieslist);
  }

  onDeleteStory(id: string) {
    this.deleteservice.deletePost(id).subscribe((data: any) => {
      console.log(data);
      this.Storieslist = this.Storieslist.filter(
        (data) => data._id !== id);
    });
  }

}