import "../styles/result.css";
import {
  AreaChart,
  CartesianGrid,
  Legend,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    Year: "2020",
    "Baseline carbon performance of asset": 75,
    "Sector decarbonisation target": 95,
    "Constant emission": 75,
  },
  {
    Year: "2022",
    "Baseline carbon performance of asset": 75,
    "Sector decarbonisation target": 98,
    "Constant emission": 75,
  },
  {
    Year: "2024",
    "Baseline carbon performance of asset": 75,
    "Sector decarbonisation target": 93,
    "Constant emission": 75,
  },
  {
    Year: "2026",
    "Baseline carbon performance of asset": 75,
    "Sector decarbonisation target": 75,
    "Constant emission": 75,
  },
  {
    Year: "2028",
    "Baseline carbon performance of asset": 38,
    "Sector decarbonisation target": 60,
    "Constant emission": 75,
  },
  {
    Year: "2030",
    "Baseline carbon performance of asset": 38,
    "Sector decarbonisation target": 50,
    "Constant emission": 75,
  },
  {
    Year: "2032",
    "Baseline carbon performance of asset": 38,
    "Sector decarbonisation target": 38,
    "Constant emission": 75,
  },
  {
    Year: "2034",
    "Baseline carbon performance of asset": 20,
    "Sector decarbonisation target": 30,
    "Constant emission": 75,
  },
  {
    Year: "2036",
    "Baseline carbon performance of asset": 20,
    "Sector decarbonisation target": 28,
    "Constant emission": 75,
  },
  {
    Year: "2038",
    "Baseline carbon performance of asset": 20,
    "Sector decarbonisation target": 22,
    "Constant emission": 75,
  },
  {
    Year: "2040",
    "Baseline carbon performance of asset": 20,
    "Sector decarbonisation target": 20,
    "Constant emission": 75,
  },
  {
    Year: "2042",
    "Baseline carbon performance of asset": 5,
    "Sector decarbonisation target": 15,
    "Constant emission": 75,
  },
  {
    Year: "2044",
    "Baseline carbon performance of asset": 5,
    "Sector decarbonisation target": 10,
    "Constant emission": 75,
  },
  {
    Year: "2046",
    "Baseline carbon performance of asset": 5,
    "Sector decarbonisation target": 6,
    "Constant emission": 75,
  },
  {
    Year: "2048",
    "Baseline carbon performance of asset": 5,
    "Sector decarbonisation target": 5,
    "Constant emission": 75,
  },
  {
    Year: "2050",
    "Baseline carbon performance of asset": 5,
    "Sector decarbonisation target": 5,
    "Constant emission": 75,
  },
];

export const StrandingDiagram = () => {
  return (
    <div className="plot">
      <AreaChart
        width={1052}
        height={269}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7A9C6C" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#7A9C6C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Year" stroke="#A2A3A5" />
        <YAxis
          label={{
            value: "GHG Intensity [KgCO2e/m2/yr]",
            angle: -90,
            position: "center",
            dx: -40,
            fill: "#A2A3A5",
          }}
          stroke="#A2A3A5"
        />
        <CartesianGrid vertical={false} />
        <Tooltip />
        <Legend />
        <Area
          dataKey="Baseline carbon performance of asset"
          stroke="#343434"
          strokeWidth={2}
          fill="transparent"
          type="stepBefore"
        />
        <Area
          type="monotone"
          dataKey="Sector decarbonisation target"
          stroke="#7A9C6C"
          fillOpacity={1}
          strokeWidth={2}
          fill="url(#colorPv)"
        />
        <Area
          dataKey="Constant emission"
          stroke="#1E1E1E"
          strokeWidth={1}
          fill="transparent"
          strokeDasharray="4 4"
        />
      </AreaChart>
    </div>
  );
};
