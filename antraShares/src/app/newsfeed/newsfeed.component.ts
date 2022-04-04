import {
  Component,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { Story } from '../interfaces/story.model';
import { StoryService } from '../services/story.service';

import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LikelistComponent } from './likelist/likelist.component';
import { VariableValue } from '../services/variable.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostStoryService } from '../services/post-story.service';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  @Input() newPost!: Story;
  stories!: Story[];
  subcribeStoryService!: Subscription;

  form!: FormGroup;
  story!: Story;
  panelOpenState: boolean = false;
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
    private storyService: StoryService,
    public dialog: MatDialog,
    private variableValue: VariableValue,
    private fb: FormBuilder,
    private postStoryService: PostStoryService,
    private securityService : SecurityService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.variableValue.buildformPost());
    this.subcribeStoryService = this.storyService
      .getStories()
      .subscribe((storyData: any) => {
        this.stories = storyData;
        this.stories.reverse();
      });
  }
  ngOnDestroy(): void {
    this.subcribeStoryService.unsubscribe();
  }
  onClickLike() {
    const dialogRef = this.dialog.open(LikelistComponent, {
      position: {
        bottom: '0',
        right: '0',
      },
      height: '75%',
      width: '35%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //new post
  onSubmit() {
    let date = new Date();
    this.story = {
      publisherName: this.securityService.getUserName(),
      publishedTime: date,
      content: {
        image: this.image?.value,
        video: this.video?.value,
        text: this.text?.value,
      },
    };
    // this.stories = [this.story,...this.stories]
    this.postStoryService.postNews(this.story).subscribe((data) => {
      this.stories = [data, ...this.stories];
      this.panelOpenState = false;
    });
  }
}
