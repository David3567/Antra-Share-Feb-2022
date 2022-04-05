import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import * as StoryActions from 'src/app/news-feed/ngrx/news.action';
import { News } from '../models/news.model';
import { of } from 'rxjs';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Injectable()
export class StoryEffect {
  private path = 'toddos';

  // load Storiess;
  loadStoryList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoryActions.loadStorylist), // selec action;
      switchMap((_) =>
        this.service.getStories().pipe(
          map((stories: any) =>
            StoryActions.loadStorySuccess({ storylist: stories })
          ),
          catchError((err) => of(StoryActions.loadStoryFailure({ err: err })))
        )
      )
    );
  });

  // // add Story;
  addStory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoryActions.addStory), // selec action;
      switchMap((action) =>
        this.service.postStory(action.story)
          .pipe(
            map((story: any) => StoryActions.addStorySuccess({ story })),
            catchError((err) => of(StoryActions.addStoryFailure({ err: err })))
          )
      )
    );
  });

  // // delete Story;
  deleteStory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoryActions.deleteStory), // selec action;
      switchMap(({ id }) =>
        this.service.deleteStory(id).pipe(
          map((_) => StoryActions.deleteStorySuccess({ id })),
          catchError((err) => of(StoryActions.deleteStoryFailure({ err: err })))
        )
      )
    );
  });

  constructor(
    private service: NewsfeedService,
    private actions$: Actions
  ) {}
}