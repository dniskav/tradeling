import { combineReducers } from 'redux';
import { IApplicationState } from '../types';
import { searchReducer } from './searchReducer';


const rootReducer = combineReducers<IApplicationState>({
  search: searchReducer,
});

export default rootReducer;
