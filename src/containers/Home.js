import React from 'react';
import { Header } from '../components/Header/Header';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Flights } from '../components/Flights/Flights';

export function Home() {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <Flights/>
    </div>
  );
};
