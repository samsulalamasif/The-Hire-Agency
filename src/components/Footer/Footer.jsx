import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 h-56 flex justify-center items-center">
      <Link to="/">
        <h1 className="text-indigo-500 text-xl font-semibold">
          Copyright © 2023 The Hire Agency. All Rights Reserved.
        </h1>
      </Link>
    </div>
  );
};

export default Footer;
