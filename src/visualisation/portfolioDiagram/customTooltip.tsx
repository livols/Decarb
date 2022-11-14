import { Card, CardContent, Typography } from "@mui/material";
import "@fontsource/inter";

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
            {label}
          </Typography>
          {payload[1].value - payload[0].value > 0 && (
            <Typography
              sx={{ color: "#d01a1a", fontFamily: "Inter", fontWeight: "bold" }}
              variant="caption"
              component="div"
              gutterBottom
            >
              {`Excess CO²: ${payload[1].value - payload[0].value}`}
            </Typography>
          )}
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
            {`Current emission: ${payload[1].value}`}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return null;
};
