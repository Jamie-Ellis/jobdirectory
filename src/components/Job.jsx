import React from "react";

export default function Job({ job, children }) {
  return (
    <div key={job.id} className="job" tabIndex={0}>
      <span className="job-container">
        <h3 className="job-name">{job.name}</h3>
        <div className="image-container">
          <img src={job.img} alt="" className="job-image" />
        </div>
      </span>
      {children}
    </div>
  );
}
