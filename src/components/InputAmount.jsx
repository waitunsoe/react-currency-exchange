import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

const InputAmount = () => {
  const { amount, setAmount } = useContext(CurrencyContext);
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="amount">Amount</InputLabel>
      <OutlinedInput
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        id="amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="Amount"
      />
    </FormControl>
  );
};

export default InputAmount;
