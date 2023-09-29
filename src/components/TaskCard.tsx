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

function TaskCard({ title }) {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Grid
      item
      className="box-shadow"
      xs={4}
      sx={{
        maxHeight: { sm: 580 },
        maxWidth: { sm: 350 },
        backgroundColor: "#D8DBD1",
        padding: 1,
        borderRadius: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, mt: 1 }}>
        {title}
      </Typography>
      <Grid container justifyContent="center" gap={3} sx={{ mb: 1 }}>
        <Grid item xs={1}></Grid>
      </Grid>
    </Grid>
  );
}

export default TaskCard;
