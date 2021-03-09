import { Action, PayloadAction, TypeConstant } from 'typesafe-actions';
import {
  SET_DETAIL_ITEM,
  SET_ITEMS_LIST,
  ITEMS_LOADER,
  SET_SEARCH_TERM,
  SET_SEARCH_KIND,
  SET_USERS_LIST,
  SET_REPOS_LIST,
  CLEAR_LIST,
  SET_PAGE,
} from '../actions/index';

export const initialState: any = {
  itemsLoader: false,
  results: [],
  users: [],
  repos: [],
  currentItem: {},
  term: '',
  kind: 'users',
  page: 0,
};

type IActionType = any;

export type actionType = Action<TypeConstant> &
  PayloadAction<TypeConstant, IActionType>;

export const searchReducer = (
  state: any = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IActionType>,
): any => {
  switch (action.type) {
    case ITEMS_LOADER: {
      return {
        ...state,
        itemsLoader: action.payload,
      };
    }
    case SET_DETAIL_ITEM: {
      return {
        ...state,
        currentItem: { ...(action.payload as any) },
      };
    }
    case SET_SEARCH_TERM: {
      return {
        ...state,
        term: action.payload,
      };
    }
    case SET_SEARCH_KIND: {
      return {
        ...state,
        kind: action.payload,
      };
    }
    case SET_ITEMS_LIST: {
      return {
        ...state,
        results: [...state.results,...(action.payload as [])],
      };
    }
    case SET_USERS_LIST: {
      return {
        ...state,
        users: [ ...state.users,...(action.payload as [])],
      };
    }
    case SET_REPOS_LIST: {
      return {
        ...state,
        repos: [ ...state.repos,...(action.payload as [])],
      };
    }
    case CLEAR_LIST: {
      return {
        ...state,
        users: [],
        repos: [],
        results: [],
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
