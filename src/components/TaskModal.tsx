import { useState } from "react";
import Modal from "react-modal";
import { Button, Grid, TextField, Typography } from "@mui/material";
import DateInput from "./DateInput";
import RadioInput from "./RadioInput";
import { useForm } from "../hooks/useForm";

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
  const { formState, onInputChange, title, description, status } = useForm({
    title: "",
    description: "",
    status: "",
  });
  const onTaskSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
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
        Tarea
      </Typography>
      <hr />
      <form className="container" onSubmit={onTaskSubmit}>
        <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
          Título de la Tarea
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
          label="Setear título"
          fullWidth
          variant="outlined"
          value={title}
          name="title"
          onChange={onInputChange}
        />
        <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
          Descripción de la Tarea
        </Typography>

        <TextField
          multiline={true}
          rows={4}
          type="text"
          label="Setear descripción"
          variant="outlined"
          sx={{
            width: { sm: 250, xs: 111, md: 350, lg: 500 },
            backgroundColor: "#F0F0F0",
            padding: 1,
            borderRadius: 0.5,
          }}
          value={description}
          name="description"
          onChange={onInputChange}
        />
        <hr />

        <hr />
        <RadioInput status="status" />
        <Grid container justifyContent="end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mr: 4, mb: 2 }}
          >
            Grabar
          </Button>
        </Grid>
      </form>
    </Modal>
  );
};
