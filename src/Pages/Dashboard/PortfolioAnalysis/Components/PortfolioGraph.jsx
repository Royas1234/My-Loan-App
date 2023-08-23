import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    ac: 700,
    cl: 1000,
  },
  {
    name: "Feb",
    ac: 1150,
    cl: 850,
  },
  {
    name: "Mar",
    ac: 1550,
    cl: 200,
  },
  {
    name: "Apr",
    ac: 1150,
    cl: 320,
  },
  {
    name: "May",
    ac: 1430,
    cl: 320,
  },
  {
    name: "Jun",
    ac: 740,
    cl: 510,
  },
  {
    name: "Jul",
    ac: 740,
    cl: 510,
  },
];
const PortfolioGraph = () => {
  return (
    <div className="portChart2">
      <div className="graph">
        <div className="chartTitle">
          <div className="colors">
            <div className="color1 tl">
              <span></span> Active
            </div>
            <div className="color3 dc">
              <span></span> Declined
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={145}>
          <BarChart data={data} stackOffset="sign">
            <CartesianGrid
              stroke="#808C8F"
              vertical={false}
              horizontal={true}
            />

            <XAxis
              dataKey="name"
              fontSize={10}
              fontWeight={500}
              tickLine={false}
            />
            <YAxis
              domain={[0, 2000]}
              ticks={[0, 500, 1000, 1500, 2000]}
              fontSize={10}
              fontWeight={500}
              tickLine={false}
              axisLine={false}
            />
            <Bar barSize={11} dataKey="cl" fill="#99007E" stackId="stack" />
            <Bar
              dataKey="ac"
              fill="#009967"
              stackId="stack"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default PortfolioGraph;
