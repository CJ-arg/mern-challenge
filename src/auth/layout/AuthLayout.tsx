import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
  title: string;
}

export const AuthLayout = ({ children, title = "" }: ChildrenProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { sm: 450 },
          backgroundColor: "#F9FAFF",
          padding: 5,
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
