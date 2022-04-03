import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { Story } from 'src/app/services/interface/news.model';
import { PostStoryService } from 'src/app/services/post-story.service';
import { VariableValue } from 'src/app/services/variable.service';
@Component({
  selector: 'app-post-story',
  templateUrl: './poststory.component.html',
  styleUrls: ['./poststory.component.scss'],
})
export class PostStoryComponent implements OnInit {

  // form!: FormGroup;
  // story!:Story
  // get image() {
  //   return this.form.get('image');
  // }
  // get video() {
  //   return this.form.get('video');
  // }
  // get text() {
  //   return this.form.get('text');
  // }
  constructor(
    private fb: FormBuilder,
    // private addCommentService: AddCommentService,
    private variableValue: VariableValue,
    private postStoryService: PostStoryService,
  ) {}

  ngOnInit(): void {
    // this.form = this.fb.group(this.buildform());
  }
  buildform() {
    return {
      image: [''],
      video: [''],
      text: [''],
    };
  }
  onSubmit() {
    // let date = new Date();
    // const token = localStorage.getItem('bearerToken');
    // let pbName: string = '';
    // if (token) {
    //   const decoded: any = jwt_decode(token);
    //   pbName = decoded.name;
    // }

    // this.story = {
    //   publisherName: pbName,
    //   publishedTime: date,
    //   content: {
    //     image: this.image?.value,
    //     video: this.video?.value,
    //     text: this.text?.value,
    //   },
    // };
    // this.postStoryService.postNews(this.story).subscribe((data)=>{
    //   // this.variableValue.newPost.push(data);
    //   alert("posted")
    // })
  }
}