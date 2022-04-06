import { createAction, props } from '@ngrx/store';
import { News } from '../models/news.model';

export const initStorylist = createAction('[StoryList] Initialize StoryList');

// load stories;
export const loadStorylist = createAction('[StoryList] Load TodoList');

export const loadStorySuccess = createAction(
  '[StoryList] Load StoryList success',
  props<{ storylist: News[] }>()
);

export const loadStoryFailure = createAction(
  '[StoryList] Load StoryList failure',
  props<{ err: string }>()
);

// add Story;
export const addStory = createAction(
  '[StoryList] add Story',
  props<{ story: string }>()
);

export const addStorySuccess = createAction(
  '[StoryList] Add Story success',
  props<{ story: News }>()
);

export const addStoryFailure = createAction(
  '[StoryList] Add Story failure',
  props<{ err: string }>()
);

// delete Story;
export const deleteStory = createAction(
  '[StoryList] Delete Story',
  props<{ id: string }>()
);

export const deleteStorySuccess = createAction(
  '[StoryList] Delete Story success',
  props<{ id: string }>()
);

export const deleteStoryFailure = createAction(
  '[StoryList] Delete Story failure',
  props<{ err: string }>()
);
