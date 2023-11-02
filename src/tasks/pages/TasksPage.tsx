import { Grid } from "@mui/material";
import { Title } from "../../components/Title";
import { TasksList } from "../../components/TasksList";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../useContext/UserContext";

export const TasksPage = () => {
  const navigate = useNavigate();
  const { tasksState, getTasks } = useContext(UserContext);
  const { msg } = tasksState;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
    } else {
      fetchTasks();
    }
  }, [tasksState.loggedIn]);

  const fetchTasks = async () => {
    try {
      await getTasks();
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="top"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 0 }}
    >
      <Grid item xs={12}>
        <Title />
        <TasksList />
      </Grid>
    </Grid>
  );
};
