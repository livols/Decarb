import { StrandingGraph } from "../visualisation/strandingDiagram/strandingGraph";
import { overviewData } from "../data/overview";
import {
  ID1,
  ID2,
  ID3,
  ID4,
  ID5,
  ID6,
  ID7,
  ID8,
  ID9,
  ID10,
  ID11,
} from "../data/assets";
import { useEffect, useState } from "react";
import { FormControl, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AssetList } from "../utils/assetList";
import Box from "@mui/material/Box";
import OverviewTable from "../utils/overviewTable";
import { PortfolioGraph } from "../visualisation/portfolioDiagram/portfolioGraph";
import SimpleMap from "../visualisation/map/map";

import Layout from "../navigation/sideBar";

export function Portfolio(loggedIn: boolean) {
  const [target, setTarget] = useState("1");
  const [asset, setAsset] = useState(ID1);
  const [assetName, setAssetName] = useState("Asset 1");
  const [data, setData] = useState(overviewData);

  const handleChange = (event: SelectChangeEvent) => {
    setTarget(event.target.value);
  };

  const setAssetData = (value: number, name: string) => {
    setAssetName(name);

    switch (value + 1) {
      case 1: {
        setAsset(ID1);
        break;
      }
      case 2: {
        setAsset(ID2);
        break;
      }
      case 3: {
        setAsset(ID3);
        break;
      }
      case 4: {
        setAsset(ID4);
        break;
      }
      case 5: {
        setAsset(ID5);
        break;
      }
      case 6: {
        setAsset(ID6);
        break;
      }
      case 7: {
        setAsset(ID7);
        break;
      }
      case 8: {
        setAsset(ID8);
        break;
      }
      case 9: {
        setAsset(ID9);
        break;
      }
      case 10: {
        setAsset(ID10);
        break;
      }
      case 11: {
        setAsset(ID11);
        break;
      }
      default: {
        setAsset(ID1);
        break;
      }
    }
  };

  const overviewData2 = overviewData.map((element: any) => ({
    ...element,
    Decarbonisation: element.Decarbonisation + 10,
    Emission: element.Emission + 10,
  }));

  useEffect(() => {
    if (target === "1") {
      setData(overviewData2);
    } else {
      setData(overviewData);
    }
  }, [target]);

  return (
    <div className="navBox" style={{ height: "100%" }}>
      {loggedIn && <Layout />}
      <div style={{ marginLeft: "2%", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ paddingTop: "10px" }}>
            <Typography
              sx={{
                color: "#0D0D0D",
                fontFamily: "Lexend",
                fontWeight: "bold",
              }}
              variant="h4"
            >
              PFA Property Portfolio
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
          <PortfolioGraph data={data} id={"4"} />
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
            {assetName}
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
            Asset overview on google maps
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "62%", height: "700px" }}>
            <SimpleMap />
          </div>
        </Box>
      </div>
    </div>
  );
}
