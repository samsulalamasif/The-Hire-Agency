import React, { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Statistics",
      path: "/statistics",
    },
    {
      id: 3,
      name: "Applied Job",
      path: "/appliedjob",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav className="bg-gray-200 ">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 " />
          ) : (
            <Bars4Icon className="h-6 w-6 " />
          )}
        </span>
      </div>
      <ul
        className={`md:flex  absolute md:static duration-500 bg-gray-200 w-screen pl-6 py-4
         ${open ? "top-6" : "-top-44"}   `}
      >
        {routes.map((route) => (
          <li>
            <Link
              className="mr-16 font-semibold text-xl text-gray-600 hover:text-gray-800"
              to={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}
        <button
          className={`w-48 h-10 rounded-xl font-semibold text-xl bg-indigo-400 ${
            open ? "top-10" : "-top-50"
          }`}
        >
          Start Applying
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
