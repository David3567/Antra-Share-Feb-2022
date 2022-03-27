import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA ,MatDialog, MatDialogRef,} from '@angular/material/dialog';
import { Comments } from 'src/app/interfaces/story.model';
import { AddCommentService } from 'src/app/services/add-comment.service';
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
    private addCommentService: AddCommentService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform());
    console.log(this.data._id);
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
    console.log(date);
    this.comment = {
      publisherName: 'news name',
      publishedTime: date,
      content: {
        // image: this.image?.value,
        // video: this.video?.value,
        // text: this.text?.value,
        image: 'this.image?.value',
        video: 'this.video?.value',
        text:' this is the new text',
      },
    };
    this.addCommentService.addComment(this.data._id, this.comment)
    .subscribe((data)=>{
      
      // this.dialogRef.close(data); 
    });
    this.dialogRef.close(this.comment); 
    console.log("in daf")
      console.log(this.comment)
  }
}
