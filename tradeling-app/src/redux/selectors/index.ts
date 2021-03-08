import { createSelector } from 'reselect';
import { IApplicationState } from '../types';

const itemsSelector = (state: IApplicationState) => state.search;
const termSelector = (state: IApplicationState) => state.search;
const kindSelector = (state: IApplicationState) => state.search;

export const getTerm = createSelector(
  termSelector,
  (state: any) => state.term,
);

export const getKind = createSelector(
  kindSelector,
  (state: any) => state.kind,
);

export const getUsers = createSelector(
  itemsSelector,
  (state: any) => state.users,
);

export const getRepos = createSelector(
  itemsSelector,
  (state: any) => state.repos,
);

export const getCurrentItem = createSelector(
  itemsSelector,
  (state: any) => state.currentItem,
);