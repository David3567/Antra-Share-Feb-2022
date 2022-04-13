
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Comment } from 'src/app/interfaces/comment.model';
import { News } from 'src/app/interfaces/news.model';
import { AuthenService } from 'src/app/services/authen.service';
import { NewsfeedService } from 'src/app/services/newsfeed.service';




const pageLength = 5;

@Component({
  selector: 'app-storycard',
  templateUrl: './storycard.component.html',
  styleUrls: ['./storycard.component.less']
})

export class StorycardComponent implements OnInit {

  @Input() news!: News;
  @Output() addLikeEmitter = new EventEmitter();
  @Output() removeLikeEmitter = new EventEmitter();
  
  like: boolean = true;
  isVisible = false;
  subscribeNewsService = new Subscription();
  pagenatorIndex:number=0;
  pageArray:Comment[] = [];
  showForward:boolean = true;
  showBack:boolean = false;
  inputValue?:string;
  canDelete?:boolean;
  canDeleteComment:boolean[] = new Array(5).fill(false);
  hasImage!:boolean;

  constructor(private newsfeedservice:NewsfeedService, private authen:AuthenService, private router: Router) { }


  ngOnInit(): void {
    if(this.news?.comment.length<=5)
     this.showForward = false;
    this.canDelete = this.authen.grantDeleteAccessbility(this.news?.publisherName)
    this.hasImage = (this.news?.content.image==null)?false:true;
    
  }

  addLike() {
    this.addLikeEmitter.emit(this.news);
    console.log(this.news._id);
  }

  buildPageArray(startIndex:number){
    this.pageArray = [];
    let count = 0;
    for (let index = startIndex; (index < startIndex+5)&&(index<this.news.comment.length); index++) {
      this.pageArray.push(this.news.comment[index])
      this.canDeleteComment[count] = this.authen.grantDeleteAccessbility(this.news.comment[index].publisherName);
      count++;
    }
  }

  removeLike() {
    this.removeLikeEmitter.emit(this.news);
  }

  addToLike() {
    if (this.like) {
      this.like = false;
      this.addLike();
    }
    else {
      this.like = true;
      this.removeLike();
    }
  }

  showModal(index:number): void {
    this.isVisible = true;
    this.buildPageArray(index);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  forward(){
    this.pagenatorIndex+=5;
    this.showBack = true;
    this.buildPageArray(this.pagenatorIndex);
    if(this.pagenatorIndex+5>=this.news.comment.length)
      this.showForward = false;
  }

  backward(){
    this.pagenatorIndex-=5;
    this.showForward = true;
    this.buildPageArray(this.pagenatorIndex);
    if(this.pagenatorIndex-5<0)
      this.showBack = false;
  }

  onComment(){
    this.newsfeedservice.patchComment(this.news._id,this.inputValue).subscribe(
      data=>{
        console.log(data);
        location.reload();
      }
    )
  }

  showDetail(){

  }

  deleteNews(){
    this.newsfeedservice.deleteNews(this.news._id).subscribe(
      ()=>{
        location.reload()
      }
    );
  }

  deleteComment(comment_id:string){
    this.newsfeedservice.deleteComment(this.news._id, comment_id).subscribe(
      ()=>{
        location.reload()
      }
    );
  }

  showProfile(){
    localStorage.setItem('userName',this.news.publisherName)
    setTimeout(() => {
      this.router.navigateByUrl('default/profile');
    }, 1000);

  }
}