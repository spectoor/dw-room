function SucessModal({ appointmentFormData }) {
  const modalStyle = {
    border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "15rem",
    width: "50%",
    margin: "auto",
    gap: "1rem",
  };
  return (
    <div
      className="modal-wrapper"
      style={{
        border: "3px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "15rem",
        width: "50%",
        margin: "auto",
        gap: "1rem",
      }}
    >
      <h1 style={{ color: "green" }}>Sucess!</h1>
      <button style={{ borderRadius: "15px", padding: "0.5rem", width: "25%" }}>
        <a href="/" download="test.ics">
          {" "}
          Download ics
        </a>
      </button>
      <button style={{ borderRadius: "15px", padding: "0.5rem", width: "25%" }}>
        Send recap email
      </button>
    </div>
  );
}

export default SucessModal;
