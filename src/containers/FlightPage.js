import React, { useState,useEffect } from 'react';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { Header } from '../components/Header/Header';
import { Flight } from '../components/Flight/Flight';
import { observer } from 'mobx-react';
import { getFlight } from '../services/flights';



function FlightPageContainer({match}) {
  const [ flight, setFlight ] = useState({});

  useEffect( () => {
    getFlight(match.params.id).then( (r) => {
      setFlight(r)
    });
  })

  return (

    <div>
     {localStorage.getItem('token') ? <HeaderLoggedIn/> : <Header/> }
     <Flight flight = {flight}/>
    </div>
  );
};


export const FlightPage = observer (FlightPageContainer)