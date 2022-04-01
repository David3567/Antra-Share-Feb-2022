import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Comments } from 'src/app/interfaces/story.model';
import { AddCommentService } from 'src/app/services/add-comment.service';
import { VariableValue } from 'src/app/services/variable.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
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
    let date = new Date();
    const token = localStorage.getItem('bearerToken');
    let pbName: string = '';
    if (token) {
      const decoded: any = jwt_decode(token);
      pbName = decoded.name;
    }

    this.comment = {
      publisherName: pbName,
      publishedTime: date,
      content: {
        image: this.image?.value,
        video: this.video?.value,
        text: this.text?.value,
      },
    };
    this.addCommentService
      .addComment(this.data._id, this.comment)
      .subscribe((data) => {
      });
      //updata
    this.dialogRef.close(this.comment);
    this.variableValue.newComment.push({
      id: this.data._id,
      cmt: this.comment,
    });
  }
}
