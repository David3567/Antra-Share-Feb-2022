import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { content } from '../models/content.model';
import { News } from '../models/news.model';

@Component({
  selector: 'app-poststory',
  templateUrl: './poststory.component.html',
  styleUrls: ['./poststory.component.scss']
})
export class PoststoryComponent implements OnInit {

  imageSrc!: string;
  validUrlreg = new RegExp('([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
  requestState = false;

  storyForm: FormGroup = this.fb.group({
    content: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
    imgurl: ['']
  });

  constructor(private fb: FormBuilder, private dialogref: MatDialogRef<PoststoryComponent>, private newsfeedService: NewsfeedService) { }

  ngOnInit(): void {
  }

  onUrlChange(event: any) {
    const url = event.target.value;
    if(this.validUrlreg.test(url)){
      this.imageSrc = url
    }
  }

  post() {
    let text = this.storyForm.value.content;
    this.requestState = true;

    const storyJson = JSON.stringify({
      "publisherName": localStorage.getItem('name'),
      "publishedTime": Date.now(),
      "content": {
              "image": this.imageSrc ? this.imageSrc : " ",
              "video": " ",
              "text": text
          }
  });

    const content: content = {
            _id: '',
            image: this.imageSrc ? this.imageSrc : " ",
            video: " ",
            text: text
        }

    const story: News = {
    _id: null,
    publisherName: localStorage.getItem('name'),
    publishedTime: Date.now().toString(),
    content: content,
    comment: [],
    likedIdList: [],
    __v: null
}

    console.log(story);

    this.newsfeedService.postStory(storyJson).subscribe(res => {
        console.log(res);
        this.dialogref.close();
    });
    
  }

  close() {
    this.dialogref.close();
  }

}
