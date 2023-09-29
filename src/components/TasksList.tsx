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
      spacing={2}
      gap={3}
      direction="row"
      justifyContent="center"
      sx={{ minHeight: "60vh", padding: 2 }}
    >
      <TaskCard title="BORRADOR" />
      <TaskCard title="TRABAJO EN CURSO" />
      <TaskCard title="LISTO" />
    </Grid>
  );
};
