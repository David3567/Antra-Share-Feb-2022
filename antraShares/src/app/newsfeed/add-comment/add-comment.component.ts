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
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent implements OnInit {
  form!: FormGroup;
  comment!: Comments;
  after!: Comments;
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
    private securityService: SecurityService,
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

    let comment: Comments = {
      publisherName: this.securityService.getUserName(),
      publishedTime: date,
      content: {
        image: this.image?.value,
        video: this.video?.value,
        text: this.text?.value,
      },
    };
    // this.addCommentService
    //   .addComment(this.data._id, comment)
    //   .subscribe((newdata) => {

    //   });
    this.addCommentService.addComment(this.data._id, comment);

    this.dialogRef.close(comment);

    this.variableValue.newComment.push({
      id: this.data._id,
      cmt: comment,
    });
    //updata
  }
}
