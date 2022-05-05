import { createSelector, createFeatureSelector } from "@ngrx/store";

export const state = createSelector(
  createFeatureSelector('login'),
  (state: any) => {
      return state.patient;
  }
);