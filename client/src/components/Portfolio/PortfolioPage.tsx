import React from "react";
import { Box, Grid, Paper, styled } from "@mui/material";
import { Projects } from "./Projects/Projects";
import { ProjectForm } from "./Projects/ProjectForm";

const PortfolioPaper = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  height: 1000,
  lineHeight: "60px",
  color: theme.palette.text.secondary,
}));

export const PortfolioPage = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Box>
          <PortfolioPaper elevation={12}>
            Bradley Knutson, maybe an image
          </PortfolioPaper>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <PortfolioPaper elevation={12}>
            This is where I'll have a description of who I am and what I do.
          </PortfolioPaper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Projects />
      </Grid>
      <Grid item xs={12}>
        <ProjectForm />
      </Grid>
    </Grid>
  );
};
