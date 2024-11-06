import React from "react";
import './Style.css';

const JobFilter = ({ jobTypes, workEnvironments, selectedJobType, setSelectedJobType, selectedEnvironment, setSelectedEnvironment }) => {
  
  const handleJobTypeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedJobType([...selectedJobType, value]);
    } else {
      setSelectedJobType(selectedJobType.filter((type) => type !== value));
    }
  };

  const handleEnvironmentChange = (event) => {
    setSelectedEnvironment(event.target.value);
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Job Type:</h3>
      <div className="filter-options">
        {jobTypes.map((type) => (
          <label key={type} className="filter-option">
            <input
              type="checkbox"
              value={type}
              onChange={handleJobTypeChange}
              checked={selectedJobType.includes(type)}
            />
            {type}
          </label>
        ))}
      </div>

      <h3 className="filter-title">Work Environment:</h3>
      <select className="environment-select" value={selectedEnvironment} onChange={handleEnvironmentChange}>
        <option value="">Select Environment</option>
        {workEnvironments.map((env) => (
          <option key={env} value={env}>
            {env}
          </option>
        ))}
      </select>
    </div>
  );
};

export default JobFilter;
