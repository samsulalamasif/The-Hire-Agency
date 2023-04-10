// import React from "react";
// import { Area, CartesianGrid, XAxis, YAxis } from "recharts";

// const Statistics = () => {
//   const marksArray = [
//     {
//       id: 1,
//       assignment: "A1",
//       marks: 48,
//     },
//     {
//       id: 2,
//       assignment: "A2",
//       marks: 60,
//     },
//     {
//       id: 3,
//       assignment: "A3",
//       marks: 60,
//     },
//     {
//       id: 4,
//       assignment: "A4",
//       marks: 59,
//     },
//     {
//       id: 5,
//       assignment: "A5",
//       marks: 60,
//     },
//     {
//       id: 6,
//       assignment: "A6",
//       marks: 58,
//     },
//     {
//       id: 7,
//       assignment: "A7",
//       marks: 59,
//     },
//     {
//       id: 8,
//       assignment: "A8",
//       marks: 60,
//     },
//   ];

//   return (
//     <div>
//       <h1></h1>
//       <CartesianGrid width={500} height={400} data={marksArray}>
//         <XAxis dataKey="assignment"></XAxis>
//         <YAxis dataKey="marks"></YAxis>
//         <Area type="monotone" dataKey="id" stroke="#8884d8" fill="#8884d8" />
//       </CartesianGrid>
//     </div>
//   );
// };

import React from "react";
import { PieChart, Pie, XAxis, Tooltip } from "recharts";

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

export default function App() {
  return (
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
  );
}

// export default Statistics;
