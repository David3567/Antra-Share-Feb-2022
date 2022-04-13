import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, finalize, first, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.less'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewsfeedComponent implements OnInit, OnDestroy {

  newsList!: News[];
  completed: boolean = false;
  isCollapsed = false;
  visible = false;
  modalIsVisible = false;

  inputValue: string | null = null;
  textValue: string | null = null;

  scrollBar$!: Observable<any>;

  newsAcceptor$!: Observable<News[]>;
  numberNewsPerPage: number = 5;
  currentPageIndex: number = 1;


  myForm: FormGroup = this.formbuilder.group({
    imageURL: [''],
    videoURL:[''],
    contentText: ['', [Validators.required]],
  })

  get title() {
    return this.myForm.get('title');
  }

  get contentText() {
    return this.myForm.get('contentText');
  }

  constructor(private formbuilder: FormBuilder, private cdr: ChangeDetectorRef, public newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedservice.getNewsArray().subscribe(
      data=>{
        this.newsList = data
        this.cdr.detectChanges();
      }
    );

    this.newsfeedservice.loadNumberNewsPerPage(1,this.numberNewsPerPage);
    
    this.scrollBar$ = fromEvent(document, 'scroll');
    this.scrollBar$.pipe(map(
      () => ({
        scrollBarYposition: window.scrollY,
        scrollBarTotalHeight: document.body.scrollHeight - document.documentElement.clientHeight,
      })
    ),
    debounceTime(500)
    ).subscribe(
      data => {
        if((data.scrollBarYposition/data.scrollBarTotalHeight)>=0.9){
          let pageIndex = this.newsList.length/5;
          if(pageIndex%1===0)
            this.newsfeedservice.loadNumberNewsPerPage(pageIndex+1,this.numberNewsPerPage)
          else alert('no more news')
        }
      })
  }//ngOnInit


  pushNews(element:News){
    this.newsList.push(element);
  }

  ngOnDestroy(): void {
    this.scrollBar$.pipe(
      first())
  }

  showModal() {
    this.modalIsVisible = true;
  }

  handleCancel() {
    this.modalIsVisible = false;
  }

  handleOk() {
    this.onSubmit();
  }

  addLike(news: News) {
    this.newsfeedservice.addToLikeList(news);
  }

  deleteLiked(news: News) {
    this.newsfeedservice.deleteFromLikeList(news);
  }

  goToLogin() {
    location.href = "http://localhost:4200/login";
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.newsfeedservice.post(this.myForm.get('contentText')?.value,this.myForm.get('imageURL')?.value,this.myForm.get('videoURL')?.value)
      .subscribe(
        data => {
          console.log(data);
          setTimeout(() => {
            this.modalIsVisible = false;
            location.reload();
          }, 1000);
        },
        (err) => {
          if(err.error!=null)
            alert(err.error)
          else alert('Some unknown error happened')
        }
      )
    }
  }
}
