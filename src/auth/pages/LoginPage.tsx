import { Button, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Game Tasks">
      {" "}
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
            >
              holi
            </TextField>
            <Grid container direction="row" justifyContent="right">
              <Link
                component={RouterLink}
                style={{ color: "lightcoral", fontSize: "11px" }}
                to="/auth/recover"
              >
                Forgot your Password
              </Link>
            </Grid>
          </Grid>
          <Grid container justifyContent="right" sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" fullWidth sx={{ mb: 1, mt: 5 }}>
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Don't have an Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
