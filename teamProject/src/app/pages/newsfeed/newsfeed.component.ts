import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostStoryService } from 'src/app/services/postStory.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.less'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewsfeedComponent implements OnInit, OnChanges {

  newsList!: News[];
  completed: boolean = false;
  isCollapsed = false;
  visible = false;

  storyForm: FormGroup = this.formbuilder.group(
    {
      publishername: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      content: ['', [Validators.required]]
    },
  );

  get name(){
    return this.storyForm.get('publishername')
  }

  get email(){
    return this.storyForm.get('email')
  }

  get content(){
    return this.storyForm.get('content')
  }

  constructor(private cdr: ChangeDetectorRef, public newsfeedservice: NewsfeedService, private post: PostStoryService,
    private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newsfeedservice.getNewsFromDataBase()
      .subscribe(
        (data) => {
          this.newsList = data;
          this.newsList = this.newsList.filter(item => {
            if (item.content.image.slice(0, 4) === 'http')
              return item;
            else {
              item.content.image = 'http://via.placeholder.com/640x360';
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

  addLike(news: News) {
    this.newsfeedservice.addToLikeList(news);
  }

  deleteLiked(news: News) {
    this.newsfeedservice.deleteFromLikeList(news);
  }

  goToLogin() {
    location.href = "http://localhost:4200/login";
  }

  onSubmit(){
    console.table(this.storyForm.value);

    const contents = {
      name: this.storyForm.value.publishername,
      message: this.storyForm.value.content
    }

    this.post.postStory(this.content?.value.name).subscribe((result) => {
      console.log(result);
    });
  }
}
