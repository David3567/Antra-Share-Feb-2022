import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Comments } from 'src/app/services/interface/news.model';
import { AddCommentService } from 'src/app/services/add-comment.service';
import { VariableValue } from 'src/app/services/variable.service';
import jwt_decode from 'jwt-decode';
import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  form!: FormGroup;
  comment!: Comments;
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
    private jwt: JwtService,
    public dialogRef: MatDialogRef<AddCommentComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { _id: string },
    private fb: FormBuilder,
    private addCommentService: AddCommentService,
    private variableValue: VariableValue
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
    this.comment = {
      publisherName: this.jwt.getjwt().userName,
      publishedTime: new Date(),
      content: {
        image: this.image?.value,
        video: this.video?.value,
        text: this.text?.value,
      },
    };
    this.addCommentService
      .addComment(this.data._id, this.comment)
      .subscribe((data) => {
        console.log(data)
      });
  
      //updata
    this.dialogRef.close(this.comment);
    this.variableValue.newComment.push({
      id: this.data._id,
      cmt: this.comment,
    });
  }
}