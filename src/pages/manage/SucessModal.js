import React from "react";

function SucessModal({ onClose }) {
  const modalStyle = {
    border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "15rem",
    width: "50%",
    margin: "auto",
    gap: "1rem",
    position: "relative",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "5px",
    right: "5px",
    zIndex: 1050,
  };

  return (
    <div className="modal-wrapper" style={modalStyle}>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={onClose} 
        style={closeButtonStyle}
      ></button>
      <h1 style={{ color: "green" }}>Success!</h1>
      <button className="btn btn-primary btn-sm">
        <a
          href="/"
          download="test.ics"
          style={{ color: "white", textDecoration: "none" }}
        >
          Download ics
        </a>
      </button>
      <button className="btn btn-secondary btn-sm">Send recap email</button>
    </div>
  );
}

export default SucessModal;
