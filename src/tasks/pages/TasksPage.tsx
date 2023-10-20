import { Grid } from "@mui/material";
import { Title } from "../../components/Title";
import { TasksList } from "../../components/TasksList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const TasksPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <Grid
      container
      spacing={0}
      xs={12}
      direction="row"
      alignItems="top"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 0 }}
    >
      <Title />
      <TasksList />
    </Grid>
  );
};
