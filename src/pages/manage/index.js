import useSWR from 'swr';
import ManageView from './ManageView';
import { API_BASE_URL, FETCHER } from '@/shared/api';
import SucessModal from './ModalView';

export default function Manage() {
  const { data, error } = useSWR(`${API_BASE_URL}/waiting-rooms`, FETCHER);
 
  if (error) return <div>Erreur lors du chargement des salles d'attente</div>;
  if (!data) return <div>Chargement...</div>;

  const waitingRooms = new Map(Object.entries(data));

  const appointmentFormData = new FormData();
  appointmentFormData.append("nom", "abdelmoula");
  appointmentFormData.append("prenom", "olivier");
  appointmentFormData.append("noSS", "1910175104446");
  appointmentFormData.append("tel", "0102030405");
  appointmentFormData.append("mail", "olivier.abdelmoula@gmail.com");

  return (
    <div>
    <ManageView waitingRooms={waitingRooms}/>
    <SucessModal fakeFormData={appointmentFormData}/>

    </div>
  );
}