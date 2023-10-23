import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FabAddNew = () => {
  return (
    <Fab
      color="secondary"
      aria-label="add"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
    >
      <AddIcon />
    </Fab>
  );
};

export default FabAddNew;
