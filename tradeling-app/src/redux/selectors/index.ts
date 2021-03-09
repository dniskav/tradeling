import { createSelector } from 'reselect';
import { IApplicationState, IinitialState } from '../types';

const itemsSelector = (state: IApplicationState) => state.search;
const termSelector = (state: IApplicationState) => state.search;
const kindSelector = (state: IApplicationState) => state.search;

export const getTerm = createSelector(
  termSelector,
  (state: IinitialState) => state.term,
);

export const getKind = createSelector(
  kindSelector,
  (state: IinitialState) => state.kind,
);

export const getUsers = createSelector(
  itemsSelector,
  (state: IinitialState) => state.users,
);

export const getRepos = createSelector(
  itemsSelector,
  (state: IinitialState) => state.repos,
);

export const getLoader = createSelector(
  itemsSelector,
  (state: IinitialState) => state.itemsLoader,
);

export const getPage = createSelector(
  itemsSelector,
  (state: IinitialState) => state.page,
);

export const getResults = createSelector(
  itemsSelector,
  (state: IinitialState) => state.results,
);