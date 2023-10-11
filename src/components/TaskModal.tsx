import { useState } from "react";
import Modal from "react-modal";
import { Button, Grid, TextField, Typography } from "@mui/material";
import DateInput from "./DateInput";
import RadioInput from "./RadioInput";

const customStyles = {
  content: {
    width: "100%",
    maxWidth: "40vw",
    maxHeight: "100%",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
    backgroundColor: "#F0F0F0",
    padding: 22,
  },
};
Modal.setAppElement("#root");

export const TaskModal = () => {
  const [modalChange, setModalChange] = useState(true);
  const onCloseModal = () => {
    setModalChange(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    setModalChange(false);
  };
  return (
    <Modal
      className="modal"
      overlayClassName="modal-bk"
      closeTimeoutMS={5000}
      isOpen={modalChange}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
        New Task UI
      </Typography>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
          Task Title
        </Typography>

        <TextField
          sx={{
            width: { sm: 250, xs: 111, md: 350, lg: 500 },
            backgroundColor: "#F0F0F0",
            padding: 1,
            borderRadius: 0.5,
          }}
          // style={{ width: "300px", margin: "5px" }}
          type="text"
          label="set Task"
          variant="outlined"
        />
        <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
          Task Description
        </Typography>

        <TextField
          multiline={true}
          rows={4}
          type="text"
          label="set Notes"
          variant="outlined"
          sx={{
            width: { sm: 250, xs: 111, md: 350, lg: 500 },
            backgroundColor: "#F0F0F0",
            padding: 1,
            borderRadius: 0.5,
          }}
        />
        <hr />
        <Grid>
          <Grid container justifyContent="start" sx={{ mb: 1 }}>
            <Grid>
              <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
                Finish Task Date
              </Typography>
            </Grid>
          </Grid>
          <DateInput />
        </Grid>
        <hr />
        <RadioInput />
        <Grid container justifyContent="end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mr: 4, mb: 2 }}
          >
            save
          </Button>
        </Grid>
      </form>
    </Modal>
  );
};
