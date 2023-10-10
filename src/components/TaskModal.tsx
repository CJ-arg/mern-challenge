import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
// function openModal() {
//   setIsOpen(true);
// }
export const TaskModal = () => {
  const [modalChange, setModalChange] = useState(true);
  const onCloseModal = () => {
    console.log("cierro modal");
    setModalChange(false);
  };
  return (
    <Modal
      overlayClassName="modal-bk"
      isOpen={modalChange}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
    >
      <h1>TaskModal</h1>
      <hr />
      <p> el modal para las tasks</p>
    </Modal>
  );
};
