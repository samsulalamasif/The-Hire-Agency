import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import vector from "/Image/All Images/Vector.png";
const data = [
  { assignment: "A1", marks: 48 },
  { assignment: "A2", marks: 60 },
  { assignment: "A3", marks: 60 },
  { assignment: "A4", marks: 59 },
  { assignment: "A5", marks: 60 },
  { assignment: "A6", marks: 58 },
  { assignment: "A7", marks: 59 },
  { assignment: "A9", marks: 60 },
];

const Statistics = () => {
  return (
    <div>
      <div className="bg-gray-200 text-center relative mb-16">
        <img src={vector} alt="" />
        <h1
          className="text-4xl text-gray-800 text-center font-semibold absolute top-[50%] left-[50%]
          translate-x-[-50%] "
        >
          Pie Chart
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <PieChart width={400} height={250}>
          <Pie
            dataKey="marks"
            startAngle={180}
            endAngle={0}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
        <h1 className="font-semibold text-xl">Assignment Marks</h1>
      </div>
    </div>
  );
};

export default Statistics;
