import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Comment } from 'src/app/interfaces/comment.model';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { JwtService } from "src/app/services/jwt.service";
import { Router } from '@angular/router';


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


  constructor(private newsfeedservice:NewsfeedService, private jwtService: JwtService, private router: Router) { }

  ngOnInit(): void {
    if(this.news?.comment.length<=5)
     this.showForward = false;
  }

  addLike() {
    this.addLikeEmitter.emit(this.news);
  }

  buildPageArray(startIndex:number){
    this.pageArray = [];
    for (let index = startIndex; (index < startIndex+5)&&(index<this.news.comment.length); index++) {
      this.pageArray.push(this.news.comment[index])
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

  showProfile() {
    if(this.jwtService.isAdmin() == true) {
      console.warn('is admin');
      localStorage.setItem('profileToShow', this.news.publisherName);
      try {
        this.router.navigateByUrl('/default/profile');
      } catch (error) {}
    }
    else {
      console.warn('not an admin');
    }
  }
}