import { Container } from "@mui/material";
import React from "react";

import "./app.css";
import Result from "./components/Result";
import Form from "./components/Form";
import TitleText from "./components/TitleText";

const App = () => {
  return (
    <Container className="app">
      <TitleText />
      <Form />
      <Result />
    </Container>
  );
};

export default App;
