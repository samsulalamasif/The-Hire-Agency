import React from "react";
import { Link } from "react-router-dom";

const Jobsfeatured = ({ jobs }) => {
  const { companyLog, company, jobTitle, jobType, location, salary, time, id } =
    jobs;

  return (
    <div className="border-2 rounded-md border-gray-300 mx-10 p-12 space-y-5">
      <div>
        <img className="w-32 h-8" src={companyLog} alt="" />
      </div>
      <h1 className="font-bold text-3xl font-serif">{jobTitle}</h1>
      <h1 className="font-bold text-xl text-gray-700">{company}</h1>
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
      <div className="flex gap-10">
        <div className="flex justify-center items-center gap-2">
          <img className="w-6 h-6" src="/Image/Icons/Frame-4.png" alt="" />
          <p className="text-lg font-semibold text-gray-600">{location}</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img className="w-6 h-6" src="/Image/Icons/Frame.png" alt="" />
          <p className="text-lg font-semibold text-gray-600">
            Salary: {salary}
          </p>
        </div>
      </div>
      <Link to={`/details/${id}`}>
        <button className="btn bg-indigo-600 hover:bg-indigo-900 mt-6">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Jobsfeatured;
