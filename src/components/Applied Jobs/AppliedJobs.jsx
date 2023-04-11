import React from "react";
import { getShoppingCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AllApplyJob from "../AllApplyJob/AllApplyJob";

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
  console.log(appliedJobs);

  return (
    <div>
      {appliedJobs.map((apply) => (
        <AllApplyJob apply={apply}></AllApplyJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
