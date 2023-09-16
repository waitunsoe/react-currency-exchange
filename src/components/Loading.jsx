import { Box, Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box sx={{ width: 300, marginTop: "1rem", marginInline: "auto" }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default Loading;
