import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FabAddNew = () => {
  const handleClickNew = () => {
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
