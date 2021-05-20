import allJobsData from '../../data.js'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const loadData = () => {
  return {
    type: 'allJobs/loadData',
    payload: allJobsData
  }
}
// export const loadData  = (value) => {
//   return async (dispatch, getState) => {
//     if (value) {
//       console.log('fetching the jobs')
//       try {
//         let resp = await fetch('https://striveschool-api.herokuapp.com/api/jobs')
//         if (resp.ok) {
//           let jobs = await resp.json()
//           dispatch({
//             type: 'allJobs/loadData',
//             payload: jobs,
//           })
//         } else {
//           console.log('error')
//           setTimeout(() => {
//             dispatch({
//               type: 'GET_JOBS_TOGGLE_ERROR',
//             })
//             setTimeout(() => {
//               dispatch({
//                 type: 'GET_JOBS_TOGGLE_ERROR',
//               })
//             }, 5000)
//           }, 1000)
//         }
//       } catch (error) {
//         console.log(error)
//         setTimeout(() => {
//           dispatch({
//             type: 'GET_BOOKS_TOGGLE_ERROR',
//           })
//         }, 1000)
//       }
//     }
//   }
  
const initialState = [];
export const allJobsReducer = (allJobs = initialState, action) => {
  switch (action.type) {
    case 'allJobs/loadData':
      return action.payload;
    case 'favoriteJobs/addJob':
      return allJobs.filter(job => job.id !== action.payload.id);
    case 'favoriteJobs/removeJob':
      return [...allJobs, action.payload]
    default:
      return allJobs;
  }
}

export const selectAllJobs = (state) => state.allJobs;

export const selectFilteredAllJobs = (state) => {
  const allJobs = selectAllJobs(state);
  const searchTerm = selectSearchTerm(state);

  return allJobs.filter((job) =>
    job.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
