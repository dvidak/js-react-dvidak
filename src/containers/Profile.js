import React from 'react';
import { observer } from 'mobx-react';
import { UserDetails } from '../components/UserDetails/UserDetails';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { UserBookings } from '../components/UserBookings/UserBookings';



function ProfilePageContainer(props) {

  function openModal() {
    props.history.push('/profile/modal');
  }


  return (
    <div>
        <HeaderLoggedIn/>
        <UserDetails openModal = {openModal}/>
        <UserBookings/>
    </div>
  );
};

export const Profile = observer (ProfilePageContainer)