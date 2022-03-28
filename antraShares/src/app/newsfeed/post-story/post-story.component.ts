import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-post-story',
  templateUrl: './post-story.component.html',
  styleUrls: ['./post-story.component.css'],
})
export class PostStoryComponent implements OnInit {
  form!: FormGroup;

  get image() {
    return this.form.get('image');
  }
  get video() {
    return this.form.get('video');
  }
  get text() {
    return this.form.get('text');
  }
  constructor(
    private fb: FormBuilder,
    // private addCommentService: AddCommentService,
    // private variableValue: VariableValue
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform());
  }
  buildform() {
    return {
      image: [''],
      video: [''],
      text: [''],
    };
  }
  onSubmit() {
    let date = new Date();
    const token = localStorage.getItem('bearerToken');
    let pbName: string = '';
    if (token) {
      const decoded: any = jwt_decode(token);
      pbName = decoded.name;
    }

    // this.comment = {
    //   publisherName: pbName,
    //   publishedTime: date,
    //   content: {
    //     image: this.image?.value,
    //     video: this.video?.value,
    //     text: this.text?.value,
    //   },
    // };
    // this.addCommentService
    //   .addComment(this.data._id, this.comment)
    //   .subscribe((data) => {
    //   });
    // this.dialogRef.close(this.comment);
    // this.variableValue.newComment.push({
    //   id: this.data._id,
    //   cmt: this.comment,
    // });
  }
}
