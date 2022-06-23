import { Button, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    github: "",
    demo: "",
  });

  const projectStateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name) {
      setProjectData({ ...projectData, [e.target.name]: e.target.value });
      console.log(projectData);
    }
  };

  const projectSubmitHandler = (e: any) => {
    console.log(e);
  };

  return (
    <FormControl variant="standard">
      {["title", "description", "github", "demo"].map((field) => (
        <TextField
          id={field}
          key={field}
          name={field}
          label={field[0].toUpperCase() + field.slice(1)}
          variant="filled"
          onChange={projectStateHandler}
        />
      ))}
      <TextField
        id="image"
        label="Image?"
        variant="filled"
        onChange={projectStateHandler}
      />

      <Button type="submit" onSubmit={projectSubmitHandler}>
        Submit
      </Button>
    </FormControl>
  );
};
