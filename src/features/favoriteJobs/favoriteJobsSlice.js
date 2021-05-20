import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

const initialState = [];
export const favoriteJobsReducer = (favoriteJobs = initialState, action) => {
  switch (action.type) {
    case 'favoriteJobs/addJob':
      return [...favoriteJobs, action.payload]
    case 'favoriteJobs/removeJob':
      return favoriteJobs.filter(job => job.id !== action.payload.id)
    default:
      return favoriteJobs;
  }
}

export function addJob(job) {
  return {
    type: 'favoriteJobs/addJob',
    payload: job
  }
}

export function removeJob(job) {
  return {
    type: 'favoriteJobs/removeJob',
    payload: job
  }
}

export const selectFavoriteJobs = (state) => state.favoriteJobs;

export const selectFilteredFavoriteJobs = (state) => {
  const favoriteJobs = selectFavoriteJobs(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteJobs.filter((job) =>
    job.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};