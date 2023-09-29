import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import TaskCard from "./TaskCard";

export const TasksList = () => {
  return (
    <Grid
      container
      xs={11}
      gap={2}
      direction="row"
      alignItems="flex-satrt"
      justifyContent="center"
      sx={{ minHeight: "70vh", padding: 2 }}
    >
      <TaskCard title="BORRADOR" />
      <TaskCard title="TRABAJO EN CURSO" />
      <TaskCard title="LISTO" />
    </Grid>
  );
};
