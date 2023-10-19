import { Button, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../useContext/UserContext";
import { postLogin } from "../../services/getTasks";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  // const { user } = useContext(UserContext);
  const { formState, onInputChange, email, password } = useForm({
    email: "",
    password: "",
  });

  const loginSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    postLogin({ email, password });
    navigate("/");
  };

  return (
    <AuthLayout title="Game Tasks">
      <form onSubmit={loginSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <TextField
              label="Nick Name"
              type="name"
              value={email}
              name="email"
              placeholder={email}
              fullWidth
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              value={password}
              label="Password"
              type="password"
              name="password"
              placeholder={password}
              fullWidth
              onChange={onInputChange}
            ></TextField>
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
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mb: 1, mt: 5 }}
                type="submit"
              >
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
