import React, { useState } from "react";
import Header from "../Header/Header";
import CategoryList from "../CategoryList/CategoryList";
import { useLoaderData } from "react-router-dom";
import Jobsfeatured from "../Jobsfeatured/Jobsfeatured";

const Home = () => {
  const jobsFeaturedData = useLoaderData();

  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <Header></Header>
      <CategoryList></CategoryList>
      <h1 className="text-5xl font-bold mt-16 text-center">Featured Jobs</h1>
      <p className=" text-lg font-semibold text-gray-600 text-center mt-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid md:grid-cols-2 gap-5 mt-10">
        {jobsFeaturedData &&
          jobsFeaturedData
            .slice(0, showAll ? 6 : 4)
            .map((jobs) => (
              <Jobsfeatured key={jobs.id} jobs={jobs}></Jobsfeatured>
            ))}
      </div>
      <div className="flex justify-center my-20">
        {!showAll && (
          <span onClick={handleShowAll}>
            <button className="text-xl font-bold btn bg-indigo-600 w-32 mx-auto hover:bg-indigo-900">
              See All
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Home;
