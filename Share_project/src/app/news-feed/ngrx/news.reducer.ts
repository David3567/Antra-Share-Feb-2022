import { act } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import { NewsState } from '../models/newsstate.model';

import * as StoryActions from './news.action';

const state: NewsState = {
  storylist: [],
};

export const Newsreducer = createReducer(
  state,
  on(StoryActions.initStorylist, (state) => {
    return { ...state };
  }),
  // load stories;
  on(StoryActions.loadStorySuccess, (state, { storylist }): NewsState => {
    return {
      ...state,
      storylist: [...[...storylist].reverse()],
      err: '',
    };
  }),
  on(StoryActions.loadStoryFailure, (state, { err }): NewsState => {
    return {
      ...state,
      storylist: [],
      err,
    };
  }),
  // add stories;
  on(StoryActions.addStorySuccess, (state, { story }): NewsState => {
    return {
      ...state,
      storylist: [story, ...state.storylist],
      err: '',
    };
  }),
  on(StoryActions.addStoryFailure, (state, { err }): NewsState => {
    return {
      ...state,
      storylist: [],
      err,
    };
  }),
  // delete story;
  on(StoryActions.deleteStorySuccess, (state, { id }): NewsState => {
    const newstorylist = state.storylist.filter((story) => {
      return story._id ? +story._id !== +id : true;
    });
    return {
      ...state,
      storylist: [...newstorylist],
      err: '',
    };
  }),
  on(StoryActions.deleteStoryFailure, (state, { err }): NewsState => {
    return {
      ...state,
      storylist: [],
      err,
    };
  })
);
