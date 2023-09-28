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

export const TasksPage = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="top"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={9}
        sx={{
          height: { sm: 150 },
          backgroundColor: "orange",
          padding: 1,
          borderRadius: 5,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, mt: 1, fontWeight: "bolder", letterSpacing: "2px" }}
        >
          PROGRAMA
        </Typography>
        <Grid container justifyContent="center" gap={3} sx={{ mb: 1 }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "black" }} id="demo-simple-select-label">
                Proyectos
              </InputLabel>
              <Select
                sx={{ color: "black" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Proyectos"
                onChange={handleChange}
              >
                <MenuItem value={10}>ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Grid item xs={1}>
            <Button
              variant="outlined"
              color="inherit"
              fullWidth
              sx={{ mt: 0, minWidth: 50, minHeight: 55 }}
            >
              OK
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
