import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  energyRenovationMeasures: string,
  investment: number,
  annualSavings: number
) {
  return { energyRenovationMeasures, investment, annualSavings };
}

const rows = [
  createData("Windows", 159, 500),
  createData("Doors", 237, 600),
  createData("Light", 262, 400),
  createData("Appliances", 305, 800),
  createData("Isolation", 356, 900),
];

export default function Savings() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Energy renovation measures</TableCell>
            <TableCell align="right">Investment</TableCell>
            <TableCell align="right">Annual savings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.energyRenovationMeasures}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.energyRenovationMeasures}
              </TableCell>
              <TableCell align="right">{row.investment}</TableCell>
              <TableCell align="right">{row.annualSavings}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
