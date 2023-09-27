import { Grid, Item, Typography } from "@mui/material";

export const LoginPage = () => {
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
          backgroundColor: "lightblue",
          padding: 2,
          borderRadius: 0.8,
          textAlign: "center",
        }}
      >
        {" "}
        <Typography variant="h1">Hola</Typography>
      </Grid>
    </Grid>
  );
};
