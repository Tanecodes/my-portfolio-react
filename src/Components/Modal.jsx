import React from "react";

function Modal ({children, onClose}) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {children}
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

export default Modal;
