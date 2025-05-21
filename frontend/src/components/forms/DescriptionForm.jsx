import * as React from "react";
import TextField from "@mui/material/TextField";

export default function DescriptionForm({
  label,
  rows,
  name,
  onChange,
  onBlur,
  value,
}) {
  return (
    <TextField
      sx={{ width: "100%" }}
      id="outlined-multiline-static"
      label={label}
      multiline
      rows={rows}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
