import React from 'react';
import { Header } from '../components/Header/Header';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Flights } from '../components/Flights/Flights';
import { observer } from 'mobx-react';
import { appState } from '../state/AppState';



export function HomePageContainer() {
  return (
    <div>
        {appState.token ? <HeaderLoggedIn/> : <Header/> }
        <SearchBar/>
        <Flights/>
    </div>
  );
};

export const Home = observer (HomePageContainer)