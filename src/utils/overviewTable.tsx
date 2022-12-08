import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CREproperties } from "../data/properties";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "name",
    headerName: "Asset name",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 420,
  },
  {
    field: "year",
    headerName: "Year",
    width: 130,
    description: "Year of construction",
  },
  {
    field: "msq",
    headerName: "msq",
    width: 130,
    type: "number",
  },
  {
    field: "emission",
    headerName: "GHG emission",
    width: 150,
    description: "Yearly GHG emission in tonnes",
    type: "number",
  },
];

export default function OverviewTable() {
  return (
    <Box sx={{ height: 400, width: "62%" }}>
      <DataGrid
        rows={CREproperties}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
