import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Carbon emission",
    width: 130,
    description: "Numbered by carbon emission",
  },
  {
    field: "name",
    headerName: "Property name",
    width: 250,
    editable: true,
  },
  {
    field: "retrofit",
    headerName: "Retrofit",
    width: 200,
    editable: true,
  },
  {
    field: "year",
    headerName: "Year",
    width: 150,
    editable: true,
    description: "Year of retrofit",
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    editable: true,
    description: "Price for retrofit",
  },
];

const rows = [
  {
    id: 1,
    retrofit: "Windows changed",
    year: "2026",
    name: "Some name",
    price: "35.000",
  },
  {
    id: 2,
    retrofit: "Changed to LED lights",
    year: "2032",
    name: "Some name",
    price: "5.000",
  },
  {
    id: 3,
    retrofit: "Heating system changed",
    year: "2040",
    name: "Some name",
    price: "45.000",
  },
  {
    id: 4,
    retrofit: "Cooling system changed",
    year: "2026",
    name: "Some name",
    price: "37.000",
  },
  {
    id: 5,
    retrofit: "Integrated solar panels",
    year: "2026",
    name: "Some name",
    price: "80.000",
  },
  {
    id: 6,
    retrofit: "Changed to custom curtain walls",
    year: "2032",
    name: "Some name",
    price: "130.000",
  },
  {
    id: 7,
    retrofit: "Changed to double glazing",
    year: "2040",
    name: "Some name",
    price: "115.000",
  },
  {
    id: 8,
    retrofit: "Optimized kitchen appliances",
    year: "2026",
    name: "Some name",
    price: "36.000",
  },
  {
    id: 9,
    retrofit: "Doors changed",
    year: "2032",
    name: "Some name",
    price: "13.000",
  },
];

export default function OverviewTable() {
  return (
    <Box sx={{ height: 400, width: "50%" }}>
      <DataGrid
        rows={rows}
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
