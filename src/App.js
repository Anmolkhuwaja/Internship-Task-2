import React, { useState, useEffect } from "react";
import JobFilter from "./Components/JobFilter";
import JobList from "./Components/JobList";
import "./Components/Style.css";

const dummyJobsData = [
  { id: 1, title: "Software Engineer", type: "Full-time", environment: "Remote" },
  { id: 2, title: "Product Manager", type: "Part-time", environment: "On-site" },
  { id: 3, title: "UI/UX Designer", type: "Freelance", environment: "Hybrid" },
  { id: 4, title: "Backend Developer", type: "Contract", environment: "Remote" },
  { id: 5, title: "Intern", type: "Internship", environment: "On-site" },
  { id: 6, title: "Project Manager", type: "Temporary", environment: "Hybrid" },
];

const jobTypes = ["Full-time", "Part-time", "Freelance", "Contract", "Internship", "Temporary"];
const workEnvironments = ["On-site", "Remote", "Hybrid"];

const App = () => {
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(dummyJobsData);

  useEffect(() => {
    const filtered = dummyJobsData.filter((job) => {
      const isJobTypeMatch = selectedJobType.length === 0 || selectedJobType.includes(job.type);
      const isEnvironmentMatch = !selectedEnvironment || job.environment === selectedEnvironment;
      return isJobTypeMatch && isEnvironmentMatch;
    });
    setFilteredJobs(filtered);
  }, [selectedJobType, selectedEnvironment]);

  return (
    <div className="app-container">
      <h1 className="title">xWave Job Portal</h1>
      <JobFilter
        jobTypes={jobTypes}
        workEnvironments={workEnvironments}
        selectedJobType={selectedJobType}
        setSelectedJobType={setSelectedJobType}
        selectedEnvironment={selectedEnvironment}
        setSelectedEnvironment={setSelectedEnvironment}
      />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default App;
