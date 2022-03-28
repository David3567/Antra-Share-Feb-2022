import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.less'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewsfeedComponent implements OnInit, OnChanges{

  newsList!: News[];
  completed: boolean = false;
  isCollapsed = false;
  visible = false;
  modalIsVisible = false;

  inputValue: string | null = null;
  textValue: string | null = null;

  myForm: FormGroup = this.formbuilder.group({
    title: ['', [Validators.required]],
    contentText: ['', [Validators.required]],
  })

  get title() {
    return this.myForm.get('title');
  }

  get contentText() {
    return this.myForm.get('contentText');
  }

  constructor(private formbuilder: FormBuilder, private cdr:ChangeDetectorRef, public newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedservice.getNewsFromDataBase()
      .subscribe(
        (data) => { 
          this.newsList = data;
          this.newsList=this.newsList.filter(item=>{
            if(item.content.image==null)
            {
              item.content.image='http://via.placeholder.com/640x360';
              return item;
            }
            else if(item.content.image.slice(0,4)==='http')
              return item;
            else {
              item.content.image='http://via.placeholder.com/640x360';
              return item;
            };
          })
          this.cdr.detectChanges();
         }
      )
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  showModal(){
    this.modalIsVisible = true;
  }

  handleCancel(){
    this.modalIsVisible = false;
  }

  handleOk(){
    this.onSubmit();
  }

  addLike(news:News){
    this.newsfeedservice.addToLikeList(news);
  }

  deleteLiked(news: News) {
    this.newsfeedservice.deleteFromLikeList(news);
  }

  goToLogin() {
    location.href = "http://localhost:4200/login";
  }

  onSubmit(){
    if(this.myForm.valid){
      this.newsfeedservice.post(this.myForm.get('contentText')?.value).subscribe(
        data=>{
          console.log(data);
          setTimeout(() => {
            this.modalIsVisible = false;
          }, 1000);
        },
        (err) => {
          setTimeout(() => {
            console.log('error')
            setTimeout(() => location.reload(), 1000);
          }, 2000);
        }
      )
      
      
    }
  }
}
