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
const onCloseModal = () => {
  console.log("cierro modal");
};
export const TaskModal = () => {
  return (
    <Modal isOpen={true} onRequestClose={onCloseModal} style={customStyles}>
      TaskModal
    </Modal>
  );
};
