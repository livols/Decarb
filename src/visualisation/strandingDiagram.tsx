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
    "Baseline carbon performance of asset": 90,
    "Sector decarbonisation target": 100,
    "Constant emission": 90,
  },
  {
    Year: "2021",
    "Baseline carbon performance of asset": 80,
    "Sector decarbonisation target": 80,
    "Constant emission": 90,
  },
  {
    Year: "2022",
    "Baseline carbon performance of asset": 45,
    "Sector decarbonisation target": 60,
    "Constant emission": 90,
  },
  {
    Year: "2023",
    "Baseline carbon performance of asset": 40,
    "Sector decarbonisation target": 40,
    "Constant emission": 90,
  },
  {
    Year: "2024",
    "Baseline carbon performance of asset": 10,
    "Sector decarbonisation target": 20,
    "Constant emission": 90,
  },
  {
    Year: "2025",
    "Baseline carbon performance of asset": 10,
    "Sector decarbonisation target": 10,
    "Constant emission": 90,
  },
  {
    Year: "2026",
    "Baseline carbon performance of asset": 0,
    "Sector decarbonisation target": 5,
    "Constant emission": 90,
  },
  {
    Year: "2027",
    "Baseline carbon performance of asset": 0,
    "Sector decarbonisation target": 0,
    "Constant emission": 90,
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
          type="monotone"
          dataKey="Baseline carbon performance of asset"
          stroke="#A2A3A5"
          strokeWidth={2}
          fill="transparent"
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
          type="monotone"
          dataKey="Constant emission"
          stroke="#1E1E1E"
          strokeWidth={1}
          fill="transparent"
        />
      </AreaChart>
    </div>
  );
};
