import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import FormatDate from "../utils/FormatDate";
import Loading from "./Loading";
import useAxios from "../hooks/useAxios";
import { CurrencyContext } from "../contexts/CurrencyContext";

const Result = () => {
  const { amount, baseCode, targetCode } = useContext(CurrencyContext);

  const { data, loading, error } = useAxios(
    `https://v6.exchangerate-api.com/v6/a77208167655aefbf1513143/pair/${baseCode}/${targetCode}/${amount}`
  );

  const { conversion_rate, conversion_result, time_last_update_utc } = data;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{ marginTop: "2rem", display: "flex", flexDirection: "column" }}
        >
          <Typography fontWeight={500}>Result:</Typography>
          <Typography
            fontSize={"1.3rem"}
            fontWeight={"bold"}
            marginBottom={"1rem"}
          >
            {amount} {baseCode} = {conversion_result?.toFixed(4)} {targetCode}
          </Typography>
          <Typography marginBottom={"1rem"}>
            <span style={{ fontWeight: 500, display: "block" }}>
              Exchange Rate:
            </span>
            1 {baseCode} = {conversion_rate?.toFixed(4)} {targetCode}
          </Typography>
          <Typography>
            <span style={{ fontWeight: 500, display: "block" }}>
              Last Update:
            </span>
            <FormatDate date={time_last_update_utc} />
          </Typography>
        </Box>
      )}
      {error && <Error message={"No result found!"} />}
    </>
  );
};

export default Result;
