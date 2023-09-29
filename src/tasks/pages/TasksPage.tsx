import { useState, useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { UserContext } from "../../useContext/UserContext";
import { Title } from "../../components/Title";
import { TasksList } from "../../components/TasksList";

export const TasksPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="top"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Title />
      <TasksList />
    </Grid>
  );
};
