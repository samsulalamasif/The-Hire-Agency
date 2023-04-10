import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import JobList from "../JobList/JobList";

const CategoryList = () => {
  const [jobLists, setJobList] = useState([]);
  useEffect(() => {
    fetch("JobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);
  return (
    <div className="grid md:grid-cols-4 gap-5 mt-10 p-10">
      {jobLists.map((jobList) => (
        <JobList key={jobList.id} jobList={jobList}></JobList>
      ))}
    </div>
  );
};

export default CategoryList;
