import { Button, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { postRegister } from "../../services/getTasks";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const { formState, onInputChange, email, password, nickname } = useForm({
    email: "",
    password: "",
    nickname: "",
  });

  const registerSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, nickname });
    postRegister({ email, password, nickname });
  };
  return (
    <>
      <AuthLayout title="Create Account">
        <form onSubmit={registerSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <TextField
                label="Email"
                type="name"
                value={email}
                name="email"
                placeholder={email}
                fullWidth
                onChange={onInputChange}
              ></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <TextField
                label="Nickname"
                type="name"
                value={nickname}
                name="nickname"
                placeholder={nickname}
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
      {/* <Grid item xs={1}>
        <Button
          variant="outlined"
          color="inherit"
          fullWidth
          sx={{ mt: 0, minWidth: 50, minHeight: 55 }}
          onClick={() =>
            setCurrentUser({
              id: 1213,
              name: "Carlos HardCode",
              email: "hardcode@gmail.com",
            })
          }
        >
          SET USER
        </Button>
      </Grid> */}
      {/* <p> {JSON.stringify(user, null, 4)}</p> */}
    </>
  );
};
