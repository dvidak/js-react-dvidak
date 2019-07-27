import React , {useState , useEffect} from 'react';
import { observer } from 'mobx-react';
import { UserDetails } from '../components/UserDetails/UserDetails';
import { HeaderLoggedIn } from '../components/Header/HeaderLoggedIn';
import { UserBookings } from '../components/UserBookings/UserBookings';
import { getUser  } from '../services/user';
import { logout } from '../services/auth';




function ProfilePageContainer(props) {
  const [ userData, setUserData ] = useState({});

  useEffect( () => {
    let id = localStorage.getItem('id');
    getUser(id).then( (u) => {
      setUserData(u)
    });
  })

  
  function openModal() {
    props.history.push('/profile/modal');
  }


  return (
    <div>
        <HeaderLoggedIn logout={logout}/>
        <UserDetails openModal = {openModal} userData = {userData}/>
        <UserBookings/>
    </div>
  );
};

export const Profile = observer (ProfilePageContainer)