import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";

const PortfolioPaper = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  height: 1000,
  lineHeight: "60px",
  color: theme.palette.text.secondary,
}));

export const PortfolioPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box>
          <PortfolioPaper elevation={12}>My name is Fred</PortfolioPaper>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <PortfolioPaper elevation={12}>Here is the second half</PortfolioPaper>
      </Grid>
    </Grid>
  );
};
