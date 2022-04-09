import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Story } from '../story.interfaces';
import jwt_decode from "jwt-decode";
import { NewsfeedService } from 'src/app/core/newsfeed.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Output() updateStoryEmitter = new EventEmitter();

  token: any = localStorage.getItem('bearerToken')
  decoded: any = jwt_decode(this.token);

  form!: FormGroup;
  storyObject!: { publisherName: any; content: any; };


  get image() {
    return this.form.get('image');
  }
  get video() {
    return this.form.get('video');
  }
  get text() {
    return this.form.get('text');
  }

  constructor(private fb: FormBuilder,
    private newsfeedService: NewsfeedService) { }

  ngOnInit(): void {

    this.form = this.fb.group(this.buildform());
  }

  private buildform() {
    return {
      image: [''],
      video: [''],
      text: [''],
    };
  }

  onSubmit() {
    this.storyObject = {
      'publisherName': this.decoded.userName,
      'content': this.form.value,
    };
    this.newsfeedService.addNewStory(this.storyObject).subscribe((data: any) => {
      console.log(data);  
      
    })
    this.updateStoryEmitter.emit(this.storyObject); 
    
  }
}

