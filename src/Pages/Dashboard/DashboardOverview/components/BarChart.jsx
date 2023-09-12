import React from "react";
import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 CartesianGrid,
 ResponsiveContainer,
} from "recharts";

const data = [
 {
  name: "Jan",
  tl: 6000,
  ap: 4010,
  dc: 2200,
 },
 { name: "Feb", tl: 7650, ap: 5550, dc: 1900 },
 { name: "Mar", tl: 6300, ap: 4300, dc: 2200 },
 { name: "Apr", tl: 6100, ap: 4110, dc: 2000 },
 { name: "May", tl: 6800, ap: 4800, dc: 2200 },
 { name: "Jun", tl: 7910, ap: 6050, dc: 1500 },
 { name: "Jul", tl: 6700, ap: 4700, dc: 1980 },
 { name: "Aug", tl: 6500, ap: 4400, dc: 2100 },
 { name: "Sep", tl: 6600, ap: 4600, dc: 2000 },
 { name: "Oct", tl: 6550, ap: 4550, dc: 2300 },
 { name: "Nov", tl: 6000, ap: 4000, dc: 1700 },
 { name: "Dec", tl: 8000, ap: 6300, dc: 2500 },
];

const Barchart = () => {
 return (
  <div className="chart1">
   <div className="chartTitle">
    <h2>Card Title</h2>
    <div className="colors">
     <div className="color1 tl">
      {" "}
      <span></span> Total Loans
     </div>
     <div className="color2 ap">
      {" "}
      <span></span> Approved
     </div>
     <div className="color3 dc">
      {" "}
      <span></span> Declined
     </div>
    </div>
   </div>
   <ResponsiveContainer width="100%" height={150}>
    <LineChart
     data={data}
     margin={{
      top: 10,
      right: 10,
      left: -25,
      bottom: 10,
     }}
    >
     <CartesianGrid stroke="#ccc" horizontal={false} vertical={false} />
     <XAxis
      dataKey="name"
      tickCount={12}
      tickLine={false}
      fontSize={10}
      fontWeight={500}
     />
     <YAxis
      domain={[0, 8000]}
      ticks={[0, 2000, 4000, 6000, 8000]}
      vertical={false}
      fontSize={10}
      fontWeight={500}
      axisLine={false}
      tickLine={false}
     />
     <Line
      type="monotone"
      dataKey="tl"
      stroke="#003299"
      strokeWidth={2.5}
      dot={false}
     />
     <Line
      type="monotone"
      dataKey="ap"
      stroke="#99007E"
      strokeWidth={2.5}
      dot={false}
     />
     <Line
      type="monotone"
      dataKey="dc"
      stroke="#009967"
      strokeWidth={2.5}
      dot={false}
     />
    </LineChart>
   </ResponsiveContainer>
   <p>Period</p>
  </div>
 );
};

export default Barchart;
