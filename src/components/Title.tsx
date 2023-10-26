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
import LogoutButton from "./LogoutButton";

export const Title = () => {
  const [project, setProject] = useState("BANCO");
  const handleChange = (event: SelectChangeEvent) => {
    setProject(event.target.value as string);
  };
  return (
    <Grid
      item
      className="box-shadow"
      xs={12}
      sx={{
        height: { sm: 180 },

        backgroundColor: "#FBFBFD",
        padding: 1,
        borderRadius: 1,
        textAlign: "center",
      }}
    >
      <Grid
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "25px",
          marginTop: "5px",
        }}
      >
        <LogoutButton />
      </Grid>
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={project}
              label="Proyectos"
              onChange={handleChange}
            >
              <MenuItem value={"BANCO"}>Banco</MenuItem>
              <MenuItem value={"APP"}>App</MenuItem>
              <MenuItem value={"PERSONAL"}>Personal</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid item xs={1}>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            sx={{ mt: 0, minWidth: 50, borderRadius: 1, minHeight: 55 }}
          >
            OK
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
