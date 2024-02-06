import { useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserContext } from "../useContext/UserContext";

function TaskSingle({ task }) {
  const { deleteTask } = useContext(UserContext);
  const handleClickDelete = (e) => {
    const data = { id: task.id, uid: task.user._id };
    e.preventDefault();
    deleteTask(data);
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
        maxHeight: { sm: 300 },
        minWidth: { sm: 300, md: 320 },
        backgroundColor: "#F5F5F5",
        padding: 1,
        borderRadius: 2,
        textAlign: "center",
        mt: 2,
      }}
    >
      <Grid container justifyContent="start" sx={{ mt: 1 }}>
        <Grid item xs={10}>
          {" "}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              textTransform: "capitalize",
              textAlign: "left",
            }}
          >
            {task.title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "Light",
              textTransform: "capitalize",
              textAlign: "left",
            }}
          >
            {task.description}
          </Typography>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            ml: 2,
            p: 0,
            borderRadius: 5,
            width: "22px ",
            height: "22px",
            color: "green",
            borderColor: "green",
          }}
          // onClick={handleEditClick}
        >
          <EditIcon sx={{ fontSize: "1rem" }} />{" "}
        </Button>
        <Button
          variant="outlined"
          onClick={handleClickDelete}
          sx={{
            ml: 2,
            p: 0,
            borderRadius: 5,
            width: "22px ",
            height: "22px",
            color: "#FE4A49",
            borderColor: "#FE4A49",
          }}
          // onClick={handleEditClick}
        >
          <DeleteIcon sx={{ fontSize: "1rem" }} />{" "}
        </Button>
      </div>
    </Grid>
  );
}

export default TaskSingle;
