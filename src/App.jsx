import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import InputAmount from "./components/InputAmount";
import SelectCountry from "./components/SelectCountry";
import SwitchCurrency from "./components/SwitchCurrency";

import "./app.css";

const App = () => {
  return (
    <Container maxWidth="md" className="app">
      <Typography textAlign={"center"} variant="h5" mb={3 + "rem"}>
        Stay ahead with accurate convertions!
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={12} sm={9} mb={3}>
          <InputAmount />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SelectCountry label={"From"}/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          textAlign={"center"}
          sx={{ marginBlock: "auto" }}
        >
          <SwitchCurrency />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SelectCountry label={"To"}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
