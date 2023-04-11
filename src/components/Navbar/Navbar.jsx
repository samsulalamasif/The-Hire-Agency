import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-52"
          >
            <li className="text-lg font-semibold text-indigo-700 hover:text-indigo-900">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg font-semibold text-gray-700 hover:text-gray-900">
              <Link to="/statistic">Statistics</Link>
            </li>
            <li className="text-lg font-semibold text-gray-700 hover:text-gray-900">
              <Link to="/applied">Applied Jobs</Link>
            </li>
            <li className="text-lg font-semibold text-gray-700 hover:text-gray-900">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="font-serif font-bold text-4xl text-indigo-600">
          The Hire Agency
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-3">
          <li className="text-lg font-semibold text-indigo-700 hover:text-indigo-900">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg font-semibold text-gray-700 hover:text-gray-900">
            <Link to="/statistics">Statistics</Link>
          </li>
          <li className="text-lg font-semibold text-gray-700 hover:text-gray-900">
            <Link to="/applied">Applied Jobs</Link>
          </li>
          <li className="text-lg font-semibold text-gray-700 hover:text-gray-900">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/">
          <button className="btn bg-indigo-600 hover:bg-indigo-900">
            Star Applying
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
