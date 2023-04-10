import React from "react";

const Jobsfeatured = ({ jobs }) => {
  const { companyLog, company, jobTitle, jobType, location, salary, time } =
    jobs;
  console.log(jobs);
  return (
    <div className="border-2 rounded-md border-gray-300 mx-10 p-12 space-y-5">
      <div>
        <img className="w-32 h-8" src={companyLog} alt="" />
      </div>
      <h1 className="font-bold text-3xl font-serif">{jobTitle}</h1>
      <h1 className="font-bold text-lg text-gray-700">{company}</h1>
      <div className="flex gap-5">
        <p
          className="border-2 border-indigo-500 rounded-md text-indigo-600
         text-xl font-semibold w-28 h-10 flex justify-center items-center "
        >
          {jobType}
        </p>
        <p
          className="border-2 border-indigo-500 rounded-md text-indigo-600
         text-xl font-semibold w-28 h-10 flex justify-center items-center "
        >
          {time}
        </p>
      </div>
      <div className="flex">
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <button className="btn bg-indigo-600 hover:bg-indigo-900">
        View Details
      </button>
    </div>
  );
};

export default Jobsfeatured;
