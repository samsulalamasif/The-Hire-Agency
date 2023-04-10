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
    <div>
      <h1 className="text-5xl font-bold mt-16 text-center">
        Job Category List
      </h1>
      <p className=" text-lg font-semibold text-gray-600 text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 gap-5 mt-10 p-10">
        {jobLists.map((jobList) => (
          <JobList key={jobList.id} jobList={jobList}></JobList>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
