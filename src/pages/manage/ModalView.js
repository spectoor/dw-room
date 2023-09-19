import ICalendarLink from "react-icalendar-link";

function SucessModal() {

  const event = {
    title: "My Title",
    description: "My Description",
    startTime: "2018-10-07T10:30:00+10:00",
    endTime: "2018-10-07T12:00:00+10:00",
    location: "10 Carlotta St, Artarmon NSW 2064, Australia"
  };

  return (
    <div className="modal-wrapper" style={{border:"3px solid red", display:"flex",flexDirection:"column",alignItems:"center",height:"15rem",width:"50%",margin:"auto",gap:"1rem"}}>
      <h1 style={{color: "green"}}>Success!</h1>
      <button style={{borderRadius: "15px",padding:"0.5rem",width:"25%"}}><ICalendarLink className="download_link" event={event}>Add to Calendar</ICalendarLink></button>
      <button style={{borderRadius: "15px",padding:"0.5rem",width:"25%"}}>Send recap email</button>
    </div>
  );
}

export default SucessModal;
