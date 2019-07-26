import React  from 'react';
import { observer } from 'mobx-react';


function UserDetailsComponent(props) {

  return (
     <div> Bok  user details
    <button  onClick={props.openModal}>otvori</button>
 </div>
  );
};

export const UserDetails = observer (UserDetailsComponent)

