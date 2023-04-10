import React from "react";
import vector from "/Image/All Images/Vector.png";
const Blog = () => {
  return (
    <div>
      <div className="bg-gray-200 text-center relative mb-16">
        <img src={vector} alt="" />
        <h1
          className="text-4xl text-gray-800 text-center font-semibold absolute top-[50%] left-[50%]
          translate-x-[-50%] "
        >
          Blog Page
        </h1>
      </div>
      <div className="flex justify-center items-center my-48 gap-6  ">
        <div className="border-2 border-gray-500 rounded-lg w-72 h-96 p-4 ">
          <h1 className="font-bold text-2xl text-indigo-500 ">
            When should you use context API?
          </h1>
          <br />
          <span className="text-gray-700 font-semibold text-xl">
            Using Context is the best fit for the use case where your codebase
            consists of lot of components that depends on a single piece of
            data, but are nested deep within the component tree.
          </span>
        </div>
        <div className="border-2 border-gray-500 rounded-lg w-72 h-96 p-4">
          <h1 className="font-bold text-2xl text-indigo-500 ">
            What is a custom hook?
          </h1>
          <br />
          <span className="text-gray-700 font-semibold text-xl">
            Custom Hook is a JavaScript function which we create by ourselves,
            when we want to share logic between other JavaScript functions.
          </span>
        </div>
        <div className="border-2 border-gray-500 rounded-lg w-72 h-96 p-4">
          <h1 className="font-bold text-2xl text-indigo-500 ">
            What is useRef?
          </h1>
          <br />
          <span className="text-gray-700 font-semibold text-xl">
            The useRef is a hook that allows to directly create a reference to
            the DOM element in the functional component. <br />
            The useRef returns a mutable ref object.
          </span>
        </div>
        <div className="border-2 border-gray-500 rounded-lg w-72 h-96 p-4">
          <h1 className="font-bold text-2xl text-indigo-500 ">
            What is useMemo?
          </h1>
          <br />
          <span className="text-gray-700 font-semibold text-xl">
            The basic purpose of the useMemo hook is related to the fact that we
            try to avoid the unnecessary re-rendering of components and props in
            our program.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
