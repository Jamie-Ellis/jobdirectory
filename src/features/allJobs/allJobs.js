
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addJob } from '../favoriteJobs/favoriteJobsSlice.js';
import { loadData, selectFilteredAllJobs } from './allJobsSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Job from "../../components/Job";

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Jobs-App/icons/favorite.svg';

export const AllJobs = () => {
  const allJobs = useSelector(selectFilteredAllJobs);
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  }
  useEffect(onFirstRender, []);
  
  const onAddJobHandler = (job) => {
    dispatch(addJob(job));
  };

  return (
    <div className="jobs-container">
      {allJobs.map((job) => (
        <Job job={job} key={job.id}>
          <FavoriteButton
            onClickHandler={() => onAddJobHandler(job)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Job>
      ))}
    </div>
  );
};


