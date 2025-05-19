import * as React from "react";
import TextField from "@mui/material/TextField";

export default function DescriptionForm({ label, rows }) {
  return (
    <TextField
      sx={{ width: "100%" }}
      id="outlined-multiline-static"
      label={label}
      multiline
      rows={rows}
    />
  );
}
