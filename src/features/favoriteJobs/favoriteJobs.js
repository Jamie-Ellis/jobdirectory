import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeJob, selectFilteredFavoriteJobs } from './favoriteJobsSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Job from "../../components/Job";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Jobs-App/icons/unfavorite.svg';

export const FavoriteJobs = () =>{
  const favoriteJobs = useSelector(selectFilteredFavoriteJobs);
  const dispatch = useDispatch();

  const onRemoveJobHandler = (job) => {
    dispatch(removeJob(job));
  };

  return (
    <div className="jobs-container">
      {favoriteJobs.map(createJobComponent)}
    </div>
  );

  // Helper Function
  function createJobComponent(job) {
    return (
      <Job job={job} key={job.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveJobHandler(job)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Job>
    )
  } 
};