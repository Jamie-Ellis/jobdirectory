import { createStore, combineReducers } from 'redux';
import { favoriteJobsReducer } from '../features/favoriteJobs/favoriteJobsSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
import { allJobsReducer } from '../features/allJobs/allJobsSlice.js';

export const store = createStore(combineReducers({
  favoriteJobs: favoriteJobsReducer,
  searchTerm: searchTermReducer,
  allJobs: allJobsReducer
}));