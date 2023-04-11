import React from "react";
import { Link } from "react-router-dom";

const AllApplyJob = ({ apply }) => {
  const { id } = apply;
  return (
    <div>
      <h1 className="text-5xl">{apply.company}</h1>
      <h1 className="text-5xl">{apply.id}</h1>
      <Link to={`/details/${id}`}>
        <button className="btn bg-indigo-600 hover:bg-indigo-900 mt-6">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AllApplyJob;
