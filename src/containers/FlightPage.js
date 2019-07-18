import React, { useState,useEffect } from 'react';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { Header } from '../components/Header/Header';
import { Flight } from '../components/Flight/Flight';
import { observer } from 'mobx-react';
import { getFlight } from '../services/flights';


function FlightPageContainer(props) {
  const [ flight, setFlight ] = useState({});

  useEffect( () => {
    getFlight(props.match.params.id).then( (r) => {
      setFlight(r)
    });
  })

  function openModal() {
    props.history.push(`/flight/${props.match.params.id}/modal`);
  }

  return (

    <div>
     {localStorage.getItem('token') ? <HeaderLoggedIn/> : <Header/> }
     <Flight flight = {flight} 
             id = {props.match.params.id} 
             openModal = {openModal}
             history = {props.history}/>
    </div>
  );
};


export const FlightPage = observer (FlightPageContainer)