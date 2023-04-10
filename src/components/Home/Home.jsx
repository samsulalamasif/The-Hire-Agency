import React, { useState } from "react";
import Header from "../Header/Header";
import CategoryList from "../CategoryList/CategoryList";
import { useLoaderData } from "react-router-dom";
import Jobsfeatured from "../Jobsfeatured/Jobsfeatured";

const Home = () => {
  const jobsFeaturedData = useLoaderData();

  return (
    <div>
      <Header></Header>
      <CategoryList></CategoryList>

      <div className="grid md:grid-cols-2 gap-5 mt-10">
        {jobsFeaturedData.map((jobs) => (
          <Jobsfeatured key={jobs._id} jobs={jobs}></Jobsfeatured>
        ))}
      </div>
      <div className="flex justify-center my-20">
        <button className="text-xl font-bold btn bg-indigo-600 w-32 mx-auto hover:bg-indigo-900">
          See All
        </button>
      </div>
    </div>
  );
};

export default Home;
