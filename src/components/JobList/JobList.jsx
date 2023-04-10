import React from "react";

const JobList = ({ jobList }) => {
  const { img, jobCategory, available } = jobList;
  return (
    <div className="bg-gray-200 w-72 h-60 rounded flex flex-col justify-center items-center mx-auto space-y-3">
      <div className="w-12 h-12 flex justify-center items-center bg-gray-300 rounded">
        <img className="w-8 h-8" src={img} alt="" />
      </div>
      <h1 className="font-bold text-xl">{jobCategory}</h1>
      <p className="text-lg">{available}</p>
    </div>
  );
};

export default JobList;
