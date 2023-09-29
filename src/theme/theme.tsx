import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#B8B3DD",
    },
    secondary: {
      main: "#54A8C3",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
