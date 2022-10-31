import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "@fontsource/lexend";
import "@fontsource/inter";

export default function AboutHouse() {
  return (
    <Card sx={{ minWidth: 275, background: "#7A9C6C" }}>
      <CardContent>
        <Typography
          sx={{ color: "#ffff", fontFamily: "Inter", fontWeight: "bold" }}
          variant="body2"
        >
          Type
        </Typography>
        <Typography
          sx={{ color: "#ffff", fontFamily: "Inter" }}
          variant="caption"
        >
          Owner/Housing Cooperative
        </Typography>
        <div style={{ marginBottom: "10px" }} />
        <Typography
          sx={{ color: "#ffff", fontFamily: "Inter", fontWeight: "bold" }}
          variant="body2"
        >
          Energy label
        </Typography>
        <Typography
          sx={{ color: "#ffff", fontFamily: "Inter" }}
          variant="caption"
        >
          E
        </Typography>
        <div style={{ marginBottom: "10px" }} />
        <Typography
          sx={{ color: "#ffff", fontFamily: "Inter", fontWeight: "bold" }}
          variant="body2"
        >
          Energy label validity
        </Typography>
        <Typography
          sx={{ color: "#ffff", fontFamily: "Inter" }}
          variant="caption"
        >
          01 sep. 2016 - 01 sep. 2026
        </Typography>
        <div style={{ marginBottom: "10px" }} />
        <Typography
          sx={{ color: "#ffff", fontFamily: "Inter", fontWeight: "bold" }}
          variant="body2"
        >
          Housing size
        </Typography>
        <Typography
          sx={{ color: "#ffff", fontFamily: "Inter" }}
          variant="caption"
        >
          62 m2
        </Typography>
      </CardContent>
    </Card>
  );
}
