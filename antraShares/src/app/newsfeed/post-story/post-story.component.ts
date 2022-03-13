import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-story',
  templateUrl: './post-story.component.html',
  styleUrls: ['./post-story.component.css'],
})
export class PostStoryComponent implements OnInit {
  form!: FormGroup;

  get url() {
    return this.form.get('videoOrImageURL');
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform());
  }

  buildform() {
    return {
      url: [],
    };
  }

  onSubmit() {
    
  }
}
