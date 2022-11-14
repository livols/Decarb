import { useEffect, useState } from "react";
import {
  AreaChart,
  CartesianGrid,
  Legend,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "@fontsource/inter";
import "@fontsource/lexend";
import { CustomTooltip } from "./customTooltip";

type StrandingObjectProps = {
  Year: string;
  Decarbonisation: number;
  Emission: number;
};

export const OverviewGraph = (props: {
  strandingData: StrandingObjectProps[];
  companyName: string;
  targetBox: boolean;
  target: string;
}) => {
  const [data, setData] = useState(props.strandingData);

  const strandingData2 = props.strandingData.map((element: any) => ({
    ...element,
    Decarbonisation: element.Decarbonisation + 10,
    Emission: element.Emission + 10,
  }));

  useEffect(() => {
    if (props.target === "1") {
      setData(strandingData2);
    } else {
      setData(props.strandingData);
    }
  }, [props.target]);

  return (
    <ResponsiveContainer width="60%" height={269}>
      <AreaChart
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
            value: "GHG Intensity [KgCO²e/m₂/yr]",
            angle: -90,
            position: "center",
            dx: -22,
            fill: "#A2A3A5",
          }}
          stroke="#A2A3A5"
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="bottom" height={36} />
        <Area
          type="monotone"
          dataKey="Decarbonisation"
          name="Sector decarbonisation target"
          stroke="#7A9C6C"
          fillOpacity={1}
          strokeWidth={2}
          fill="url(#colorPv)"
        />
        <Area
          dataKey="Emission"
          name="Current emission"
          stroke="#1E1E1E"
          fill="transparent"
          strokeWidth={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
