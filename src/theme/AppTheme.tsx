import { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";

interface ChildrenProps {
  children: ReactNode;
}
export const AppTheme = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
