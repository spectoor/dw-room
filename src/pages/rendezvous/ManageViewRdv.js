import Head from "next/head";
import { getWaitingRoomColor } from "@/shared/colors";
import { AddToCalendarButton } from "add-to-calendar-button-react";

const pageMetadata = {
  title: "Prise de rendez vous",
};

export default function ManageView({ waitingRooms }) {
  return (
    <main className={"container my-5"}>
      <Head>
        <title>{pageMetadata.title}</title>
      </Head>
      <section className={"row"}>
        <h2>Prendre rendez-vous</h2>

        <form action="/send-data-here" method="post">
          <label for="first">Prénom:</label>
          <input type="text" id="first" name="first" />

          <label for="last">Nom de famille:</label>
          <input type="text" id="last" name="last" />

          <label for="socialnumber">Numéro sécurité social:</label>
          <input type="text" id="socialnumber" name="socialnumber" />

          <label for="email">email:</label>
          <input type="email" id="email" name="email" />

          <AddToCalendarButton
            name="Test-Event"
            startDate="2023-05-22"
            options={["Apple", "Google", "Yahoo", "iCal"]}
          ></AddToCalendarButton>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
