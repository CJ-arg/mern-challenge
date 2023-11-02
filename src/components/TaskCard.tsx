import { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import TaskSingle from "./TaskSingle";
import { UserContext } from "../useContext/UserContext";

function TaskCard({ title }) {
  const { tasksState } = useContext(UserContext);
  const { msg } = tasksState;

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
          {msg &&
            msg
              .filter((item) => item.status === title)
              .map((task) => <TaskSingle key={task.id} task={task} />)}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default TaskCard;
