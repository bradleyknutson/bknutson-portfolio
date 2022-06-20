import { Grid, Paper } from "@mui/material";
import React from "react";
import { ProjectCard } from "./ProjectCard";

const projectList = [
  {
    title: "Title One",
    desription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi illum sed architecto odio, iusto in, odit a assumenda iure quaerat accusamus ut delectus, fugiat vero ducimus dolorem nesciunt. Vero, ex?",
    github: "/testgithub",
    demo: "/testdemo",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title Two",
    desription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi illum sed architecto odio, iusto in, odit a assumenda iure quaerat accusamus ut delectus, fugiat vero ducimus dolorem nesciunt. Vero, ex?",
    github: "/testgithub",
    demo: "/testdemo",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title Three",
    desription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi illum sed architecto odio, iusto in, odit a assumenda iure quaerat accusamus ut delectus, fugiat vero ducimus dolorem nesciunt. Vero, ex?",
    github: "/testgithub",
    demo: "/testdemo",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title Four",
    desription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi illum sed architecto odio, iusto in, odit a assumenda iure quaerat accusamus ut delectus, fugiat vero ducimus dolorem nesciunt. Vero, ex?",
    github: "/testgithub",
    demo: "/testdemo",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title Five",
    desription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi illum sed architecto odio, iusto in, odit a assumenda iure quaerat accusamus ut delectus, fugiat vero ducimus dolorem nesciunt. Vero, ex?",
    github: "/testgithub",
    demo: "/testdemo",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Title Six",
    desription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi illum sed architecto odio, iusto in, odit a assumenda iure quaerat accusamus ut delectus, fugiat vero ducimus dolorem nesciunt. Vero, ex?",
    github: "/testgithub",
    demo: "/testdemo",
    image: "https://via.placeholder.com/150",
  },
];

export const Projects = () => {
  return (
    <Grid container spacing={4} justifyContent="space-between">
      {projectList.map((project) => (
        <Grid item md={4}>
          <Paper elevation={12}>
            <ProjectCard
              description={project.desription}
              title={project.title}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
