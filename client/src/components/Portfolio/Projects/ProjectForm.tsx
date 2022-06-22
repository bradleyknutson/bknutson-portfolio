import { FormControl, TextField } from "@mui/material";
import React from "react";

export const ProjectForm = () => {
  return (
    <FormControl variant="standard">
      <TextField id="title" label="Title" variant="filled" />
    </FormControl>
  );
};
