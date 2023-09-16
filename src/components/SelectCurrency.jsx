import {
  Autocomplete,
  Box,
  CircularProgress,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useAxios from "../hooks/useAxios";

const SelectCurrency = ({ label, value, setValue }) => {
  const {
    data: currencies,
    error,
    loading,
  } = useAxios(
    "https://v6.exchangerate-api.com/v6/a77208167655aefbf1513143/codes"
  );

  const currencyCodes = currencies?.supported_codes?.map(
    (code) => `${code[0]} - ${code[1]}`
  );

  if (loading) {
    return <Skeleton variant="rectangular" animation="wave" height={60} />;
  }

  if (error) {
    return <Error error="Failed to fetch currencies!" />;
  }

  return (
    currencyCodes && (
      <Autocomplete
        value={value}
        disableClearable
        onChange={(_, newValue) => setValue(newValue)}
        options={currencyCodes}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    )
  );
};

export default SelectCurrency;
