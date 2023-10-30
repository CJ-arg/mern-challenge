import { Button } from "@mui/material";
import { autoLogout } from "../services/getTasks";
import { UserContext } from "../useContext/UserContext";
import { useContext } from "react";

const LogoutButton = () => {
  const { setLoggedIn } = useContext(UserContext);

  const logOut = () => {
    autoLogout();
    setLoggedIn(false);
  };
  return (
    <Button variant="contained" size="small" onClick={logOut}>
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
