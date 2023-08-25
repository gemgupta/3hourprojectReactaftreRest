import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};
const ModalMain = (props) => {
  return (
    <div className="modal">
      <div>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("Overlay")
      )}
      {ReactDOM.createPortal(
        <ModalMain>{props.children}</ModalMain>,
        document.getElementById("Overlay")
      )}
    </>
  );
}

export default Modal;
