import React, { useState,useEffect } from 'react';
import { Flight } from '../components/Flight/Flight';
import { observer } from 'mobx-react';
import { getFlight } from '../services/flights';


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
      <Flight flight = {flight} 
              openModal = {openModal}/>
  );
};

export const FlightPage = observer (FlightPageContainer)