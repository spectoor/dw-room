import useSWR from 'swr';
import ManageView from './ManageView';
import { API_BASE_URL, FETCHER } from '@/shared/api';
import { createEvent } from "ics";
import { saveAs } from "file-saver";

const event = {
  start: [2023, 5, 18, 17, 0],
  duration: { hours: 1, minutes: 0 },
  title: "Rappel de RDV",
  description: "RDV à 17h",
  location: "Paris, France",
  url: "http://www.bolderboulder.com/",
  geo: { lat: 40.0095, lon: 105.2669 },
  categories: ["10k races", "Memorial Day Weekend", "Boulder CO"],
  status: "CONFIRMED",
  busyStatus: "BUSY",
  organizer: { name: "Admin", email: "Race@BolderBOULDER.com" },
  attendees: [
    {
      name: "Adam Gibbons",
      email: "adam@example.com",
      rsvp: true, // rsvp : Abréviation de Répondez s'il vous plaît (à une invitation).
      partstat: "ACCEPTED",
      role: "Patient"
    },
    {
      name: "Brittany Seaton",
      email: "brittany@example2.org",
      dir: "https://linkedin.com/in/brittanyseaton",
      role: "Practicien"
    }
  ]
};

const handleSave = () => {
  createEvent(event, (error, value) => {
    const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "event-schedule.ics");
  });
};



export default function Manage() {
  const { data, error } = useSWR(`${API_BASE_URL}/waiting-rooms`, FETCHER);
 
  if (error) return <div>Erreur lors du chargement des salles d'attente</div>;
  if (!data) return <div>Chargement...</div>;

  const waitingRooms = new Map(Object.entries(data));

  return (
    <div>
      <button onClick={handleSave}>Envoyer une notification</button>
      <ManageView waitingRooms={waitingRooms}/>
    </div>
    
  );
}