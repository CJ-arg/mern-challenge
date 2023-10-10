import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TaskSingle from "./TaskSingle";

function TaskCard({ title }) {
  const tasks = [
    {
      title: "Hacer boceto",
      notes: "terminar diseño en figma boceto",
      dateStart: new Date(),
      dateEnd: new Date().setHours(new Date().getHours() + 24),
      category: "BORRADOR",
      user: {
        _id: "123456",
        name: "Carlos",
      },
    },
    {
      title: " Trabajo en curso",
      notes: "una tarea que se esta realizando",
      dateStart: new Date(),
      dateEnd: new Date().setHours(new Date().getHours() + 34),
      category: "TRABAJO EN CURSO",
      user: {
        _id: "23456",
        name: "Carlos",
      },
    },
    {
      title: "tarea lista",
      notes: "terminado en figma",
      dateStart: new Date(),
      dateEnd: new Date().setHours(new Date().getHours() + 44),
      category: "LISTO",
      user: {
        _id: "3456",
        name: "Carlos",
      },
    },
  ];
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Grid
      item
      className="box-shadow"
      xs={10}
      sm={8}
      md={4}
      lg={3}
      sx={{
        minWidth: { sm: 350 },
        backgroundColor: "#FBFBFD",
        padding: 1,
        borderRadius: 0.5,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
        {title}
      </Typography>
      <Grid container justifyContent="start" sx={{ mb: 1 }}>
        <Grid item xs={1}>
          {tasks[0].category === title && <TaskSingle task={tasks[0]} />}
          {tasks[1].category === title && <TaskSingle task={tasks[1]} />}
          {tasks[2].category === title && <TaskSingle task={tasks[2]} />}
          {tasks[2].category === title && <TaskSingle task={tasks[2]} />}
          {tasks[2].category === title && <TaskSingle task={tasks[2]} />}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TaskCard;
