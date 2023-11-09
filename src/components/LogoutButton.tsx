import { Button } from "@mui/material";
import { UserContext } from "../useContext/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = async () => {
    await logout();
    navigate("/auth/login");
  };
  return (
    <Button variant="contained" size="small" onClick={logOut}>
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
