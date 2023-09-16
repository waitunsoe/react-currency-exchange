import { CompareArrows } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";

const SwitchCurrency = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);
    
  const handleSwitchCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Button onClick={handleSwitchCurrency} color="primary" variant="contained">
      <CompareArrows />
    </Button>
  );
};

export default SwitchCurrency;
