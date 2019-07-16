import React from 'react';
import { Flight } from '../components/Flight/Flight';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';




export function FlightPage() {
  return (
    <div>
     <HeaderLoggedIn/>
     <Flight/>
    </div>
  );
};
