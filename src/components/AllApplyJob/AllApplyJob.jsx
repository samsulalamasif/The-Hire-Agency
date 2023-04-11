import React from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";

const AllApplyJob = ({ appliedJob, applyJobRemove }) => {
  const { companyLog, company, jobTitle, jobType, location, salary, time, id } =
    appliedJob;
  return (
    <div className="flex justify-between border-2 border-gray-300 rounded-lg h-64 w-[1330px] mx-auto mb-16 p-5">
      <div>
        <div className="flex gap-7">
          <div className="bg-gray-300 w-52 h-52 rounded-md flex justify-center items-center ">
            <img className="w-40" src={companyLog} alt="" />
          </div>
          <div className="my-5">
            <h1 className="text-2xl font-bold mb-2">{jobTitle}</h1>
            <h1 className="text-2xl text-gray-500 font-semibold mb-3">
              {company}
            </h1>
            <div className="flex gap-5 mb-3">
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
                <img
                  className="w-6 h-6"
                  src="/Image/Icons/Frame-4.png"
                  alt=""
                />
                <p className="text-lg font-semibold text-gray-500">
                  {location}
                </p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img className="w-6 h-6" src="/Image/Icons/Frame.png" alt="" />
                <p className="text-lg font-semibold text-gray-500">
                  Salary: {salary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  gap-5 my-auto">
        <div>
          <Link to={`/details/${id}`}>
            <button className="btn bg-indigo-600 hover:bg-indigo-900">
              View Details
            </button>
          </Link>
        </div>
        <div>
          <button onClick={() => applyJobRemove(id)}>
            <XCircleIcon className="h-8 w-8 text-indigo-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllApplyJob;
