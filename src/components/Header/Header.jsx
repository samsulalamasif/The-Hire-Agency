import React from "react";
import img from "/Image/All Images/P3OLGJ1 copy 1.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-gray-200 justify-center md:px-24 md:pt-10">
      <div className="font-container pt-24">
        <h1>One Step </h1>
        <h1>Closer To Your </h1>
        <h1 style={{ color: " #4F46E5" }}>Dream Job</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn bg-indigo-600 hover:bg-indigo-900 mt-8">
          Get Started
        </button>
      </div>
      <div className="w-96 lg:w-[1000px]">
        <img src={img} alt="" />
      </div>
    </div>
  );
};
export default Header;
