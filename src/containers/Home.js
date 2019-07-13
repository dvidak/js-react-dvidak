import React from 'react';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { Flights } from '../components/Flights';
import { FlightBlock } from '../components/FlightBlock';

export function Home() {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <Flights/>
    </div>
  );
};
