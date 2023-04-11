import React, { useState } from "react";
import { getShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AllApplyJob from "../AllApplyJob/AllApplyJob";
import vector from "/Image/All Images/Vector.png";

const AppliedJobs = () => {
  const jobData = useLoaderData();

  const applyData = getShoppingCart();

  let appliedJobs = [];

  for (const id in applyData) {
    const foundJob = jobData.find((jobs) => jobs.id === id);
    if (foundJob) {
      foundJob.quantity = applyData[id];
      appliedJobs.push(foundJob);
    }
  }

  const [cart, setCart] = useState(appliedJobs);
  const applyJobRemove = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div>
      <div className="bg-gray-200 text-center relative mb-16">
        <img src={vector} alt="" />
        <h1
          className="text-4xl text-gray-800 text-center font-semibold absolute top-[50%] left-[50%]
        translate-x-[-50%] "
        >
          Applied Jobs
        </h1>
      </div>
      {appliedJobs.map((appliedJob) => (
        <AllApplyJob
          appliedJob={appliedJob}
          key={appliedJob.id}
          applyJobRemove={applyJobRemove}
        ></AllApplyJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
