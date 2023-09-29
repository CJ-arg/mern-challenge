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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TaskCard from "./TaskCard";

export const TasksList = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Grid container xs={11} gap={2}>
      <TaskCard title="BORRADOR" />
      <TaskCard title="TRABAJO EN CURSO" />
      <TaskCard title="LISTO" />
    </Grid>
  );
};
