import React from "react";

function SucessModal({ onClose }) {
  return (
    <div
      className="modal fade show d-flex align-items-center justify-content-center"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div className="modal-dialog modal-dialog-centered" style={{ width: "70%", maxWidth: "400px" }}>
        <div className="modal-content" style={{ padding: "20px" }}>
          <div className="modal-header">
            <h5 className="modal-title text-success">Success!</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-sm mx-auto" style={{ padding: "10px", fontSize: "14px", width: "90%" }}>
                <a
                  href="/"
                  download="test.ics"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Download ics
                </a>
              </button>
              <button className="btn btn-secondary btn-sm mx-auto" style={{ padding: "10px", fontSize: "14px", width: "90%" }}>
                Send recap email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SucessModal;
