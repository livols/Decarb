import { useState } from "react";
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
import { FormControl, MenuItem, Typography, Box } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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
}) => {
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
            {props.companyName} property portfolio
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
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} />
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
        {props.targetBox && (
          <div style={{ paddingTop: "65px" }}>
            <FormControl sx={{ m: 1, minWidth: 50 }}>
              <Typography
                sx={{ color: "#0D0D0D", fontFamily: "Inter" }}
                variant="caption"
              >
                Global warming target
              </Typography>
              <Select
                sx={{
                  borderColor: "#A2A3A5",
                  "&:hover": {
                    "&& fieldset": {
                      border: "1px solid #7A9C6C",
                    },
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #7A9C6C",
                  },
                }}
                value={target}
                onChange={handleChange}
                displayEmpty
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      backgroundColor: "#A4C099",
                    },
                  },
                }}
              >
                <MenuItem value={"1"}>1.5°C</MenuItem>
                <MenuItem value={"2"}>2°C</MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
      </Box>
    </div>
  );
};
