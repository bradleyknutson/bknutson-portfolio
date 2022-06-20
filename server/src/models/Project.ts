import mongoose from "mongoose";
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    demo: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Project = model("Project", projectSchema);
export default Project;
