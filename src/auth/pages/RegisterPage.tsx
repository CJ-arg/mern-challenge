import { Button, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Create Accunt">
      {" "}
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField
              label="Name"
              type="name"
              placeholder="Name"
              fullWidth
            ></TextField>
          </Grid>
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
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="right">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Have an Account? Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
