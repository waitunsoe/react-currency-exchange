import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";

const InputAmount = () => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="Amount"
      />
    </FormControl>
  );
};

export default InputAmount;
