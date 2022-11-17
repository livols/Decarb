import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    description: "Numbered by carbon emission",
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
    headerName: "Yearly GHG emission",
    width: 150,
    description: "Yearly GHG emission in tonnes",
    type: "number",
  },
];

const rows = [
  {
    id: 1,
    name: "Bølgen",
    address: "Ved Bølgen, 7100 Vejle",
    year: "2017",
    msq: 14000,
    emission: 1329,
  },
  {
    id: 2,
    name: "Nordbro",
    address: "Borgmestervangen 5 - 31, 2200 København N ",
    year: "2019",
    msq: 30700,
    emission: 2893.7,
  },
  {
    id: 3,
    name: "Statens Museum for Kunst",
    address: "Sølvgade 48 - 50, 1307 København K",
    year: "1884 (1998)",
    msq: 37700,
    emission: 3530.7,
  },
  {
    id: 4,
    name: "Danhostel Copenhagen City",
    address: "H.C. Andersens Boulevard 50, 1553 København V",
    year: "1955",
    msq: 21000,
    emission: 2011,
  },
  {
    id: 5,
    name: "Bella Center",
    address: "Bella Center Copenhagen, Center Boulevard 5, 2300 Copenhagen ",
    year: "1975-2014",
    msq: 41000,
    emission: 3831,
  },
  {
    id: 6,
    name: "Turning torso",
    address: "Lilla Varvsgatan 14, Malmo, Sweden",
    year: "2001-2005",
    msq: 32000,
    emission: 3012,
  },
];

export default function OverviewTable() {
  return (
    <Box sx={{ height: 400, width: "60%" }}>
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
