import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poststory',
  templateUrl: './poststory.component.html',
  styleUrls: ['./poststory.component.scss']
})
export class PoststoryComponent implements OnInit {
  form!: FormGroup;
  _id!:string;

  get image() {
    return this.form.get('post_image');
  }

  get video() {
    return this.form.get('post_video');
  }

  get text() {
    return this.form.get('post_text');
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      image: new FormControl(''),
      video: new FormControl(''),
      text: new FormControl('')
    },{});
  }
  onSubmit(){
    
  }
}
