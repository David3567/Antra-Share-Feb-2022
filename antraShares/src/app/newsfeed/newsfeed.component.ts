import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Story } from '../interfaces/story.model';
import { StoryService } from '../services/story.service';

import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LikelistComponent } from './likelist/likelist.component';
import {
  AbstractControl,
  ValidationErrors,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AsyncValidatorFn,
} from '@angular/forms';
import { PostStoryService } from '../services/post-story.service';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  stories!: Story[];
  private token = localStorage.getItem("bearerToken")!;
  private email = this.jwt.decodeToken(this.token).userEmail;
  subcribeStoryService!: Subscription;
  constructor(private storyService: StoryService, public dialog: MatDialog, private fb: FormBuilder, private jwt: JwtHelperService, private post: PostStoryService
  ) { }
  get postContent() {
    return this.form.get('postContent');
  }
  buildform() {
    return {
      postContent: ['', Validators.required]
    };
  }
  ngOnInit(): void {
    this.subcribeStoryService = this.storyService
      .getStories()
      .subscribe((storyData: any) => {
        this.stories = storyData;
      });
    this.form = this.fb.group(this.buildform(), {

    });
  }
  onSubmit() {
    console.log(this.form.valid)
    console.log(this.form.value);
    console.log(this.jwt.decodeToken(this.token));
    console.log(this.token)

    console.log(this.email)
    const story = {
      name: this.email,
      message: this.form.value.postContent
    }
    console.log(story)
    this.post.postStory(this.postContent?.value.name).subscribe((result) => {
      console.log(result);
    });
  }
  ngOnDestroy(): void {
    this.subcribeStoryService.unsubscribe();
  }
  onClickLike() {
    const dialogRef = this.dialog.open(LikelistComponent, {
      position: {
        bottom: '35px',
        right: '4%',
      },
      height: '70%',
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


