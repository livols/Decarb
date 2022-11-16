import { StrandingGraph } from "../visualisation/strandingDiagram/strandingGraph";
import { OverviewGraph } from "../visualisation/portfolioDiagram/overviewGraph";
import { overviewData } from "../data/overview";
import { asset1, asset2 } from "../data/assets";
import { useState } from "react";
import { FormControl, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AssetList } from "../utils/assetList";
import Box from "@mui/material/Box";
import OverviewTable from "../utils/overviewTable";

export function Portfolio() {
  const [target, setTarget] = useState("1");
  const [id, setId] = useState(1);
  const [asset, setAsset] = useState(asset1);

  const handleChange = (event: SelectChangeEvent) => {
    setTarget(event.target.value);
  };

  const setAssetData = (value: number) => {
    setId(value);
    if (value % 2 === 0) {
      setAsset(asset1);
    } else {
      setAsset(asset2);
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
        <div style={{ paddingTop: "10px" }}>
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
          paddingTop: "35px",
        }}
      >
        <Typography
          sx={{ color: "#0D0D0D", fontFamily: "Lexend", fontWeight: "bold" }}
          variant="h5"
        >
          Overview of all assets
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <OverviewGraph
          strandingData={overviewData}
          companyName={"PFA"}
          targetBox
          target={target}
        />
        <FormControl sx={{ m: 1, minWidth: 50, paddingTop: "50px" }}>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "35px",
        }}
      >
        <Typography
          sx={{ color: "#0D0D0D", fontFamily: "Lexend", fontWeight: "bold" }}
          variant="h5"
        >
          Asset {id + 1}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "15px",
        }}
      >
        <StrandingGraph strandingData={asset} target={target} />
        <div style={{ paddingLeft: "15px" }}>
          <AssetList callback={setAssetData} />
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "35px",
        }}
      >
        <OverviewTable />
      </Box>
    </div>
  );
}
