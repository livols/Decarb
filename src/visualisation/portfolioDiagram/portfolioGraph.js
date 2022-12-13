import React from "react";
import {
  XAxis,
  YAxis,
  Area,
  Line,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { CustomTooltip } from "./customTooltip";

export const PortfolioGraph = (props) => {
  const { data, id } = props;

  const dataWithRange = data.map((d) => ({
    ...d,
    range:
      d.Emission !== undefined && d.Decarbonisation !== undefined
        ? [d.Emission, d.Decarbonisation]
        : [],
  }));

  const getIntersectionColor = (_intersection, isLast) => {
    if (isLast) {
      return _intersection.line1isHigherNext ? "#d01a1a" : "transparent";
    }

    return _intersection.line1isHigher ? "#d01a1a" : "transparent";
  };

  const intersections = data
    .map((d, i) =>
      intersect(
        i,
        d.Emission,
        i + 1,
        data[i + 1]?.Emission,
        i,
        d.Decarbonisation,
        i + 1,
        data[i + 1]?.Decarbonisation
      )
    )
    .filter((d) => d && !isNaN(d.x));

  const filteredIntersections = intersections.filter(
    (d, i) => i === intersections.length - 1 || d.x !== intersections[i - 1]?.x
  );

  return (
    <ResponsiveContainer width="54%" height={280}>
      <ComposedChart
        data={dataWithRange}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id={id}>
            {filteredIntersections.length ? (
              filteredIntersections.map((intersection, i) => {
                const nextIntersection = filteredIntersections[i + 1];

                let closeColor = "";
                let startColor = "";

                const isLast = i === filteredIntersections.length - 1;

                if (isLast) {
                  closeColor = getIntersectionColor(intersection);
                  startColor = getIntersectionColor(intersection, true);
                } else {
                  closeColor = getIntersectionColor(intersection);
                  startColor = getIntersectionColor(nextIntersection);
                }

                const offset =
                  intersection.x /
                  (data.filter(
                    (d) =>
                      d.Emission !== undefined &&
                      d.Decarbonisation !== undefined
                  ).length -
                    1);

                return (
                  <>
                    <stop
                      offset={offset}
                      stopColor={closeColor}
                      stopOpacity={0}
                    />
                    <stop
                      offset={offset}
                      stopColor={startColor}
                      stopOpacity={0.8}
                    />
                  </>
                );
              })
            ) : (
              <stop
                offset={0}
                stopColor={
                  data[0].Emission > data[0].Decarbonisation
                    ? "#d01a1a"
                    : "transparent"
                }
              />
            )}
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="bottom" height={36} iconType="plainline" />
        <XAxis dataKey="Year" stroke="#A2A3A5" />
        <YAxis
          tickCount={5}
          tickLine={false}
          allowDecimals={false}
          label={{
            value: "GHG Intensity [KgCO₂e/m²/yr]",
            angle: -90,
            position: "center",
            dx: -22,
            fill: "#A2A3A5",
          }}
          stroke="#A2A3A5"
        />
        <Area
          dataKey="range"
          name="Excess CO₂"
          fill={`url(#${id})`}
          stroke="#d54747"
        />
        <Line
          type="monotone"
          dataKey="Emission"
          dot={false}
          name="Current emission"
          stroke="#1E1E1E"
          fill="transparent"
          strokeWidth={1}
        />
        <Line
          type="monotone"
          dataKey="Decarbonisation"
          name="Sector decarbonisation target"
          stroke="#7A9C6C"
          fill="transparent"
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
    return false;
  }

  const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

  if (denominator === 0) {
    return false;
  }

  let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;

  if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
    return false;
  }

  let x = x1 + ua * (x2 - x1);
  let y = y1 + ua * (y2 - y1);

  const line1isHigher = y1 > y3;
  const line1isHigherNext = y2 > y4;

  return { x, y, line1isHigher, line1isHigherNext };
}
