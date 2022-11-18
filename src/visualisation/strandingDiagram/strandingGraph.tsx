import { useEffect, useState } from "react";
import {
  AreaChart,
  CartesianGrid,
  Legend,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import "@fontsource/inter";
import "@fontsource/lexend";
import { CustomTooltip } from "./customTooltip";

type StrandingObjectProps = {
  Year: string;
  Baseline: number;
  Decarbonisation: number;
  Emission: number;
};

export const StrandingGraph = (props: {
  strandingData: StrandingObjectProps[];
  target: string;
}) => {
  const [data, setData] = useState(props.strandingData);

  const strandingData2 = props.strandingData.map((element: any) => ({
    ...element,
    Decarbonisation: element.Decarbonisation + 10,
    Baseline: element.Baseline + 10,
    Emission: element.Emission + 10,
  }));

  useEffect(() => {
    if (props.target === "1") {
      setData(strandingData2);
    } else {
      setData(props.strandingData);
    }
  }, [props.target, props.strandingData]);

  return (
    <ResponsiveContainer width="50%" height={269}>
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
        <CartesianGrid vertical={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="bottom" height={36} iconType="plainline" />
        <Area
          dataKey="Baseline"
          name="Baseline carbon performance of asset"
          stroke="#6B7280"
          strokeWidth={2}
          fill="transparent"
          type="stepBefore"
        />
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
          name="Constant emission"
          stroke="#1E1E1E"
          strokeWidth={1}
          fill="transparent"
          strokeDasharray="4 4"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
