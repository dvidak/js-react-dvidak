import React from 'react';
import { observer } from 'mobx-react';
import { UserDetails } from '../components/UserDetails/UserDetails';

function ProfilePageContainer(props) {

  function openModal() {
    props.history.push('/profile/modal');
  }


  return (
    <div>
        <h1>Profile js</h1>
        <UserDetails openModal = {openModal}/>
    </div>
  );
};

export const Profile = observer (ProfilePageContainer)