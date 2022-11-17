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
import { properties } from "../data/properties";

type AssetListProps = {
  callback: (value: number) => void;
};

export function AssetList(props: AssetListProps) {
  const [value, setValue] = useState("Bottom");

  const propertiesDescending = [...properties].sort(
    (a, b) => b.emission - a.emission
  );

  const propertiesAscending = [...properties].sort(
    (a, b) => a.emission - b.emission
  );

  const bottom = propertiesDescending
    .filter((item, index) => index < 5)
    .map((filteredItem, index) => ({
      id: index,
      name: filteredItem.name,
    }));

  const top = propertiesAscending
    .filter((item, index) => index < 5)
    .map((filteredItem, index) => ({
      id: index,
      name: filteredItem.name,
    }));

  const [data, setData] = useState(bottom);

  const handleClick = () => {
    if (value === "Bottom") {
      setValue("Top");
      setData(top);
    } else {
      setValue("Bottom");
      setData(bottom);
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
            return (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    props.callback(id);
                  }}
                >
                  <ListItemText primaryTypographyProps={{ fontSize: "12px" }}>
                    {`${id + 1}.`} {`${name}`}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}
