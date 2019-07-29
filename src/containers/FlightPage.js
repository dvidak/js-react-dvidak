import React, { useState,useEffect } from 'react';
import { Header } from '../components/Header/Header';
import { Flight } from '../components/Flight/Flight';
import { observer } from 'mobx-react';
import { getFlight } from '../services/flights';
import { logout } from '../services/auth';


function FlightPageContainer(props) {
  const [ flight, setFlight ] = useState({});
  let flightId = props.match.params.id

  useEffect( () => {
    getFlight(flightId).then( (f) => {
      setFlight(f)
    });
  },[flightId])

  function openModal() {
    props.history.push(`/flight/${props.match.params.id}/modal`);
  }

  return (
    <div>
      <Header logout={logout}/> 
      <Flight flight = {flight} 
              openModal = {openModal}/>
    </div>
  );
};

export const FlightPage = observer (FlightPageContainer)