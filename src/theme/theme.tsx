import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#A5CBDB",
    },
    secondary: {
      main: "#3D1BFE",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
