import React from 'react';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { Flight } from '../components/Flight/Flight';




export function FlightPage() {
  return (
    <div>
     <HeaderLoggedIn/>
     <Flight/>
    </div>
  );
};
