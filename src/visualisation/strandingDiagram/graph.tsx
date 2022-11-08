import { useState } from "react";
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
import { FormControl, MenuItem, Typography, Box } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "@fontsource/inter";
import "@fontsource/lexend";
import { CustomTooltip } from "./customTooltip";

type StrandingObjectProps = {
  Year: string;
  Baseline: number;
  Decarbonisation: number;
  Emission: number;
};

export const Graph = (props: { strandingData: StrandingObjectProps[] }) => {
  const [target, setTarget] = useState("1");
  const [data, setData] = useState(props.strandingData);

  const strandingData2 = props.strandingData.map((element: any) => ({
    ...element,
    Decarbonisation: element.Decarbonisation + 10,
    Baseline: element.Baseline + 10,
    Emission: element.Emission + 10,
  }));

  const handleChange = (event: SelectChangeEvent) => {
    setTarget(event.target.value);

    if (target === "1") {
      setData(strandingData2);
    } else {
      setData(props.strandingData);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingTop: "10px", paddingBottom: "40px" }}>
          <Typography
            sx={{ color: "#0D0D0D", fontFamily: "Lexend", fontWeight: "bold" }}
            variant="h4"
          >
            PFA property portfolio
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
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
            <Legend verticalAlign="top" height={36} />
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
        <div style={{ paddingTop: "65px" }}>
          <FormControl sx={{ m: 1, minWidth: 50 }}>
            <Typography
              sx={{ color: "#0D0D0D", fontFamily: "Inter" }}
              variant="caption"
            >
              Global warming target
            </Typography>
            <Select value={target} onChange={handleChange} displayEmpty>
              <MenuItem value={"1"}>1.5°C</MenuItem>
              <MenuItem value={"2"}>2°C</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
    </div>
  );
};
