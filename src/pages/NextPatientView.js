import Head from 'next/head';
import styles from './app.module.css';

const pageMetadata = {
  title: 'Dental Waiting Room'
};

export default function NextPatientView({waitingRooms}) {

  const shortenName = (name) => {
    const spaceIndex = name.indexOf(" ");
    return name.slice(0, spaceIndex + 2);
  }

  const displayRoom = (room) => {
    let nextAppointement;
    const appointments = waitingRooms ? waitingRooms.get(room) : [];
    nextAppointement = waitingRooms ? appointments[0] : undefined;

    return <div className={'card-body d-flex flex-column justify-content-center'}>
      <div className={`d-flex justify-content-center`}>
        <h2>{`Salle ${room}`}</h2>
      </div>
      {
        nextAppointement && <>
          <div className='d-flex justify-content-center'><h3>{nextAppointement.reference}</h3></div>
          <div className='d-flex justify-content-center display-4'><h4>{shortenName(nextAppointement.name)}.</h4></div>
        </> 
      }
    </div>
  };

  return (
    <main className={'container'}>
      <Head>
        <title>{pageMetadata.title}</title>
      </Head>
      <h1>RDV en cours</h1>
      <div className={'row'}>
        <div className={`col-5 card mt-5 ${styles.waitingRoom} bg-secondary`}>
          {
            displayRoom('A')
          }
        </div>
        <div className={`col-5 offset-1 card mt-5 ${styles.waitingRoom} bg-info`}>
          {
            displayRoom('C')
          }
        </div>
      </div>
      <div className={'row'}>
        <div className={`col-5 card mt-5 ${styles.waitingRoom} bg-warning`}>
          {
            displayRoom('B')
          }
        </div>
        <div className={`col-5 offset-1 card mt-5 ${styles.waitingRoom} bg-success`}>
          {
            displayRoom('D')
          }
        </div>
      </div>
    </main>
  );
}
