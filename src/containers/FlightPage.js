import React from 'react';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { Header } from '../components/Header/Header';
import { Flight } from '../components/Flight/Flight';
import { observer } from 'mobx-react';
import { appState } from '../state/AppState';


function FlightPageContainer() {
  return (
    <div>
     {localStorage.getItem('token') ? <HeaderLoggedIn/> : <Header/> }
     <Flight/>
    </div>
  );
};


export const FlightPage = observer (FlightPageContainer)