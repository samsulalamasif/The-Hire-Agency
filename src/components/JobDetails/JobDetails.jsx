import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import vector from "/Image/All Images/Vector.png";

const JobDetails = () => {
  const dynamic = useParams();
  const jobData = useLoaderData();
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (jobData) {
      const detailsData = jobData.find((data) => data.id === dynamic.JobId);
      setDetails(detailsData);
    }
  }, []);

  return (
    <div className="">
      <div className="bg-gray-200 text-center relative mb-16">
        <img src={vector} alt="" />
        <h1
          className="text-4xl text-gray-800 text-center font-semibold absolute top-[50%] left-[50%]
        translate-x-[-50%] "
        >
          Job Details
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 mx-48 mb-32 p-4">
        <div className="space-y-5">
          <h1>
            <span className="font-semibold">Job Description: </span>
            <span className="text-gray-700">{details.jobDescription}</span>
          </h1>
          <h1>
            <span className="font-semibold">Job Responsibility: </span>
            <span className="text-gray-700">{details.jobResponsibility}</span>
          </h1>
          <h1>
            <span className="font-semibold">Educational Requirements: </span>
            <br />
            <span className="text-gray-700">
              {details.educationalRequirements}
            </span>
          </h1>
          <h1>
            <span className="font-semibold">Experiences: </span>
            <br />
            <span className="text-gray-700">{details.experiences}</span>
          </h1>
        </div>
        <div>
          <div className="bg-indigo-100 p-5 rounded">
            <h1 className="text-2xl font-bold mb-3">Job Details</h1>
            <div className="flex justify-start items-center gap-3">
              <img src="/Image/Icons/Frame.png" alt="" />
              <p className="text-lg">
                <span className="font-semibold">Salary: </span>
                <span>{details.salary} </span>
                <span>(Per Month)</span>
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 mt-3">
              <img src="/Image/Icons/Frame.png" alt="" />
              <p className="text-lg">
                <span className="font-semibold ">Job Title: </span>
                <span>{details.jobTitle} </span>
              </p>
            </div>
            <h1 className="text-xl font-bold mt-4 mb-5">
              Company:{" "}
              <span className="text-indigo-500">{details.company}</span>
            </h1>
            <h1 className="text-2xl font-bold mt-8 mb-5">
              Contact Information
            </h1>
            <div className="flex justify-start items-center gap-3 mt-3">
              <img src="/Image/Icons/Frame-2.png" alt="" />
              <p className="text-lg">
                <span className="font-semibold ">Phone: </span>
                <span>{details.phone} </span>
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 mt-3">
              <img src="/Image/Icons/Frame-3.png" alt="" />
              <p className="text-lg">
                <span className="font-semibold ">Email: </span>
                <span>{details.email} </span>
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 mt-3">
              <img src="/Image/Icons/Frame-4.png" alt="" />
              <p className="text-lg">
                <span className="font-semibold ">Address: </span>
                <span>{details.address} </span>
              </p>
            </div>
          </div>

          <Link>
            <button className="btn bg-indigo-600 hover:bg-indigo-900 mt-6 w-full">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
