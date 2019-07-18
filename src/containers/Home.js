import React from 'react';
import { useAsync } from 'react-use';
import { Header } from '../components/Header/Header';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Flights } from '../components/Flights/Flights';
import { observer } from 'mobx-react';
import { loadFlights } from '../services/flights';
import { appState } from '../state/AppState';
import { logout } from '../services/auth';




export function HomePageContainer() {
  useAsync(loadFlights.bind(null, appState));

  return (
    <div>
        {localStorage.getItem('token') ? <HeaderLoggedIn logout = {logout} /> : <Header/> }
        <SearchBar/>
        <Flights flights = {appState.filteredFlights}/>
    </div>
  );
};

export const Home = observer (HomePageContainer)