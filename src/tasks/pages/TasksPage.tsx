import { Grid } from "@mui/material";
import { Title } from "../../components/Title";
import { TasksList } from "../../components/TasksList";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
// import { getTasks } from '../../services/getTasks';
import { UserContext } from "../../useContext/UserContext";

export const TasksPage = () => {
  const navigate = useNavigate();
  const { data, setData, tasksState, getTasks } = useContext(UserContext);
  console.log(tasksState.msg, "tasksState ahora");
  const { msg } = tasksState;
  console.log(msg, "msg");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
    } else {
      !data && fetchTasks();
    }
  }, [tasksState.loggedIn]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      console.log(data, " data en task page");
      console.log(tasksState, "tasksState despues");

      setData(data);
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
