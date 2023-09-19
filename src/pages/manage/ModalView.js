import ICalendarLink from "react-icalendar-link";
import React from "react";

function SucessModal({ onClose }) {
  const event = {
    title: "My Title",
    description: "My Description",
    startTime: "2018-10-07T10:30:00+10:00",
    endTime: "2018-10-07T12:00:00+10:00",
    location: "10 Carlotta St, Artarmon NSW 2064, Australia",
  };

  return (
    <div
      className="modal fade show d-flex align-items-center justify-content-center"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ width: "70%", maxWidth: "400px" }}
      >
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
              <button
                className="btn btn-primary btn-sm mx-auto"
                style={{ padding: "10px", fontSize: "14px", width: "90%" }}
              >
                <ICalendarLink className="download_link" event={event}>
                  Ajouter au calendrier
                </ICalendarLink>
              </button>
              <button
                className="btn btn-secondary btn-sm mx-auto"
                style={{ padding: "10px", fontSize: "14px", width: "90%" }}
              >
                <a href="mailto:adresse@email.com?subject=Confirmation de votre rendez-vous médical&body=Bonjour,
                 %0D%0A
                %0D%0A Votre rendez-vous médical à bien été confirmé.
                %0D%0A Veuillez noter qu'une absence au rendez-vous que vous avez pris vous placera sur une liste noire et vous ne pourrez plus prendre de rendez-vous à l'avenir.">Envoyer un récapitulatif par mail</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SucessModal;
