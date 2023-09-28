import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
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
          padding: 5,
          borderRadius: 0.8,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 1 }}>
          GameTasks
        </Typography>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <TextField
                label="Nick Name"
                type="name"
                placeholder="Nick Name"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              ></TextField>
            </Grid>
            <Grid container justifyContent="right" sx={{ mb: 3 }}>
              <Grid item xs={12} sm={6}>
                <Button variant="outlined" fullWidth sx={{ mb: 1, mt: 5 }}>
                  {" "}
                  Ingresar
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                No tengo Cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
