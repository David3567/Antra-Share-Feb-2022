import { createSelector, createFeatureSelector } from '@ngrx/store';
import { News } from '../models/news.model';
import { NewsState } from '../models/newsstate.model';

export const selectStory = createFeatureSelector<NewsState>('story');

export const getStoryList = createSelector(
  selectStory,
  (state: NewsState): News[] => {
    return state.storylist;
  }
);
