import React , {useState , useEffect} from 'react';
import { observer } from 'mobx-react';
import { UserDetails } from '../components/UserDetails/UserDetails';
import { Header } from '../components/Header/Header';
import { UserBookings } from '../components/UserBookings/UserBookings';
import { getUser  } from '../services/user';
import { logout } from '../services/auth';
import styles from './containers.module.css'

function ProfilePageContainer(props) {
  const [ userData, setUserData ] = useState({});
  let id = localStorage.getItem('id');

  useEffect( () => {
    getUser(id).then( (u) => {
      setUserData(u)
    });
  },[id])

  
  function openModal() {
    props.history.push('/profile/modal');
  }


  return (
    <div className={styles.main}>
        <Header logout={logout}/>
        <UserDetails openModal = {openModal} userData = {userData}/>
        <UserBookings bookings = {userData.bookings}/>
    </div>
  );
};

export const Profile = observer (ProfilePageContainer)