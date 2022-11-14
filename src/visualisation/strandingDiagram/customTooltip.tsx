import { Card, CardContent, Typography } from "@mui/material";
import "@fontsource/inter";

const getIntroOfPage = (label: string) => {
  if (label === "2026") {
    return "Windows changed";
  }
  if (label === "2032") {
    return "Changed to LED lights";
  }
  if (label === "2040") {
    return "Heating system changed";
  }
  return null;
};

export const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Card
        sx={{
          backgroundColor: "#ffff",
        }}
      >
        <CardContent>
          <Typography
            sx={{ color: "#0D0D0D", fontFamily: "Inter", fontWeight: "bold" }}
            variant="body2"
            component="div"
            gutterBottom
          >
            {getIntroOfPage(label)
              ? `${label}: ${getIntroOfPage(label)}`
              : `${label}`}
          </Typography>
          <Typography
            sx={{ color: "#7A9C6C", fontFamily: "Inter", fontWeight: "bold" }}
            variant="caption"
            component="div"
            gutterBottom
          >
            {`Sector decarbonisation: ${payload[0].value}`}
          </Typography>
          <Typography
            sx={{ color: "#6B7280", fontFamily: "Inter", fontWeight: "bold" }}
            variant="caption"
            component="div"
          >
            {`Baseline carbon: ${payload[1].value}`}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return null;
};
