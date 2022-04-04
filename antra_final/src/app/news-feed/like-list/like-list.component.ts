import { Component, OnInit, Inject, OnDestroy} from '@angular/core';
import { Story } from '../story.interfaces';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Subscription } from 'rxjs';
import { Variables } from 'src/app/core/globalVariable';
import { ShortenPipe } from 'src/app/core/shorten.pipe';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.css'],
})
export class LikeListComponent implements OnInit, OnDestroy {
  likedList!: Story[];
  subsciptionLiked$ = new Subscription();

  constructor(private newsfeedservice: NewsfeedService, 
    public variable: Variables,
    ) { }

  ngOnInit(): void {
      this.subsciptionLiked$ = this.newsfeedservice.getLikedList().subscribe((data: Story[]) => {
      this.likedList = data;
    })
   }

  onRemoveLiked(data: Story){
    this.variable.removed.push(data._id);
    this.newsfeedservice.removeFromLikedList(data);
  }

  ngOnDestroy(): void {
    this.subsciptionLiked$.unsubscribe();
  }

}
function remove(remove: any, arg1: any) {
  throw new Error('Function not implemented.');
}

