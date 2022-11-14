import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import "@fontsource/inter";

type AssetListProps = {
  callback: (value: number) => void;
};

export function AssetList(props: AssetListProps) {
  const properties = [
    { id: 0, name: "Asset" },
    { id: 1, name: "Asset" },
    { id: 2, name: "Asset" },
    { id: 3, name: "Asset" },
    { id: 4, name: "Asset" },
  ];
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography
          sx={{
            color: "#0D0D0D",
            fontFamily: "Inter",
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom: "8px",
          }}
          variant="body2"
        >
          Bottom 5 properties
        </Typography>
        <Divider />
        <List dense sx={{ maxWidth: 250 }}>
          {properties.map(({ id, name }) => {
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
