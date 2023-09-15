import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const SelectCountry = ({ label }) => {
  return (
    <Autocomplete
      options={["option1", "option2", "option3"]}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default SelectCountry;
