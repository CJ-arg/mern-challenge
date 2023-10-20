import { Button } from "@mui/material";
import React from "react";
import { autoLogout } from "../services/getTasks";

const LogoutButton = () => {
  return (
    <Button variant="contained" size="small" onClick={autoLogout}>
      LOGOUT
    </Button>
  );
};

export default LogoutButton;
