import { Grid } from "@mui/material";
import React, { useContext } from "react";
import InputAmount from "./InputAmount";
import SelectCurrency from "./SelectCurrency";
import SwitchCurrency from "./SwitchCurrency";
import useAxios from "../hooks/useAxios";
import { CurrencyContext } from "../contexts/CurrencyContext";

const Form = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);

  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      <Grid item xs={12} sm={9} mb={3}>
        <InputAmount />
      </Grid>
      <Grid item xs={12} sm={5}>
        <SelectCurrency
          label={"From currency"}
          value={fromCurrency}
          setValue={setFromCurrency}
        />
      </Grid>
      <Grid item xs={12} sm={2} sx={{ marginBlock: "auto" }}>
        <SwitchCurrency />
      </Grid>
      <Grid item xs={12} sm={5}>
        <SelectCurrency
          label={"To currency"}
          value={toCurrency}
          setValue={setToCurrency}
        />
      </Grid>
    </Grid>
  );
};

export default Form;
