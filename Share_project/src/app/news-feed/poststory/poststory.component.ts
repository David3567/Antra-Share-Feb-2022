import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as StoryActions from 'src/app/news-feed/ngrx/news.action';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-poststory',
  templateUrl: './poststory.component.html',
  styleUrls: ['./poststory.component.scss'],
})
export class PoststoryComponent implements OnInit {
  imageSrc!: string;
  validUrlreg = new RegExp('([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
  requestState = false;

  storyForm: FormGroup = this.fb.group({
    content: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
    ],
    imgurl: [''],
  });

  constructor(
    private fb: FormBuilder,
    private dialogref: MatDialogRef<PoststoryComponent>,
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {}

  onUrlChange(event: any) {
    const url = event.target.value;
    if (this.validUrlreg.test(url)) {
      this.imageSrc = url;
    }
  }

  post() {
    let text = this.storyForm.value.content;
    this.requestState = true;

    const storyJson = JSON.stringify({
      publisherName: this.authService.getUserInfo().name,
      publishedTime: Date.now(),
      content: {
        image: this.imageSrc ? this.imageSrc : ' ',
        video: ' ',
        text: text,
      },
    });


    // this.newsfeedService.postStory(storyJson).subscribe(res => {
    //     console.log(res);
    //     this.dialogref.close();
    // });

    this.store.dispatch(StoryActions.addStory({story: storyJson}));

    this.dialogref.close();
    
  }

  close() {
    this.dialogref.close();
  }
}
