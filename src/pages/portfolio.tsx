import { Graph } from "../visualisation/strandingDiagram/graph";
import { OverviewGraph } from "../visualisation/portfolioDiagram/overviewGraph";
import { overviewData, strandingData } from "../data/dummy";
import { useState } from "react";
import { Box, FormControl, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function Portfolio() {
  const [target, setTarget] = useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setTarget(event.target.value);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingTop: "10px" }}>
          <Typography
            sx={{ color: "#0D0D0D", fontFamily: "Lexend", fontWeight: "bold" }}
            variant="h4"
          >
            PFA property portfolio
          </Typography>
        </div>
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
      </Box>
      <OverviewGraph
        strandingData={overviewData}
        companyName={"PFA"}
        targetBox
        target={target}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
          <Typography
            sx={{ color: "#0D0D0D", fontFamily: "Lexend", fontWeight: "bold" }}
            variant="h4"
          >
            Asset 1
          </Typography>
        </div>
      </Box>
      <Graph strandingData={strandingData} target={target} />
    </div>
  );
}
