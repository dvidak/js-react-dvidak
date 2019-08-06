import React , {useState , useEffect} from 'react';
import { observer } from 'mobx-react';
import { UserDetails } from '../components/UserDetails/UserDetails';
import { UserBookings } from '../components/UserBookings/UserBookings';
import { getUser  } from '../services/user';
import styles from '../style/containers.module.css'

function ProfilePageContainer(props) {
  const [ userData, setUserData ] = useState({});
  const [ seeAll, setSeeAll] = React.useState(false)
  let id = localStorage.getItem('id');

  useEffect( () => {
    getUser(id).then( (u) => {
      setUserData(u)
    });
  }, [id])

  
  function openModal() {
    props.history.push('/profile/modal');
  }

  function onChange(){
    setSeeAll(!seeAll);
  }


  return (
    <div className={styles.main}>
        <UserDetails openModal = {openModal} userData = {userData}/>
        <UserBookings bookings = {userData.bookings}
                      seeAll = {seeAll}
                      onChange = {onChange}
                      />
    </div>
  );
};

export const Profile = observer (ProfilePageContainer)