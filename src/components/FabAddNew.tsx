import React, { useContext } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { UserContext } from "../useContext/UserContext";

const FabAddNew = () => {
  const { modalChange, setModalChange } = useContext(UserContext);

  const handleClickNew = () => {
    setModalChange(true);
    console.log("modal");
  };
  return (
    <Fab
      color="error"
      aria-label="add"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      onClick={handleClickNew}
    >
      <AddIcon />
    </Fab>
  );
};

export default FabAddNew;
