import React from "react";
import './Style.css';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list-container">
      <h3 className="job-list-title">Job Listings</h3>
      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.id} className="job-item">
            <div className="job-info">
              <h4 className="job-title">{job.title}</h4>
              <p className="job-type">{job.type}</p>
              <p className="job-environment">{job.environment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
