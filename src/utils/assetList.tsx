import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Card, CardContent, Divider, Button } from "@mui/material";
import "@fontsource/inter";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";

type AssetListProps = {
  callback: (value: number) => void;
};

const BottomProperties = [
  { id: 0, name: "Bottom asset" },
  { id: 1, name: "Bottom asset" },
  { id: 2, name: "Bottom asset" },
  { id: 3, name: "Bottom asset" },
  { id: 4, name: "Bottom asset" },
];

const TopProperties = [
  { id: 0, name: "Top asset" },
  { id: 1, name: "Top asset" },
  { id: 2, name: "Top asset" },
  { id: 3, name: "Top asset" },
  { id: 4, name: "Top asset" },
];

export function AssetList(props: AssetListProps) {
  const [value, setValue] = useState("Bottom");
  const [data, setData] = useState(BottomProperties);

  const handleClick = () => {
    if (value === "Bottom") {
      setValue("Top");
      setData(TopProperties);
    } else {
      setValue("Bottom");
      setData(BottomProperties);
    }
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Button
          startIcon={
            value === "Bottom" ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />
          }
          sx={{
            color: "#0D0D0D",
            fontFamily: "Inter",
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "none",
          }}
          onClick={() => handleClick()}
        >
          {value === "Bottom" ? "Bottom 5 properties" : "Top 5 properties"}
        </Button>
        <Divider sx={{ paddingTop: "8px" }} />
        <List dense sx={{ maxWidth: 250 }}>
          {data.map(({ id, name }) => {
            const labelId = `label${id}`;
            return (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    props.callback(id);
                  }}
                >
                  <ListItemText>{`${id + 1}.`}</ListItemText>
                  <ListItemText id={labelId} primary={`${name}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}
