import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar bg-gray-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52"
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
        <Link to="/" class="font-serif font-bold text-4xl">
          The Hire Agency
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-3">
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
      <div class="navbar-end">
        <button class="btn btn-info">Star Applying</button>
      </div>
    </div>
  );
};

export default Navbar;
