import { Button } from "@mui/material";
import { UserContext } from "../useContext/UserContext";
import { useContext } from "react";

const LogoutButton = () => {
  const { logout } = useContext(UserContext);

  const logOut = () => {
    logout();
  };
  return (
    <Button variant="contained" size="small" onClick={logOut}>
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
