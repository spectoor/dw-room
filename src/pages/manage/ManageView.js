import Head from "next/head";
import SucessModal from "./SucessModal";
import { getWaitingRoomColor } from "@/shared/colors";
import React, { useState } from "react";

const pageMetadata = {
  title: "Dental Waiting Room - Manage",
};

export default function ManageView({ waitingRooms }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayWaitingRooms = () => {
    const display = [];
    waitingRooms.forEach((appointments, room) => {
      display.push(
        <div className={`mt-4`} key={`room-${room}`}>
          <h3
            className={`px-3 py-2 ${getWaitingRoomColor(room)}`}
          >{`Salle ${room}`}</h3>

          {appointments.map((appointment, index) => (
            <>
              <div
                className={`card mb-2`}
                key={`appointment-${appointment.reference}`}
              >
                <div className={"card-body"}>
                  {appointment.name}&nbsp;|&nbsp;{appointment.noSS}
                </div>
              </div>
              {index !== appointments.length - 1 && (
                <span
                  className={"px-3 material-icons material-symbols-outlined"}
                >
                  arrow_downward
                </span>
              )}
            </>
          ))}
        </div>
      );
    });
    return display;
  };

  return (
    <main className={"container my-5"}>
      <Head>
        <title>{pageMetadata.title}</title>
      </Head>
      <section className={"row"}>
        <h2>Salles d'attente</h2>
        {displayWaitingRooms()}
      </section>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-primary mt-3"
      >
        Open Modal
      </button>
      {isModalOpen && <SucessModal onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}
