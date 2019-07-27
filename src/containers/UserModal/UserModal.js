import React from 'react';
import { observer } from 'mobx-react';
import styles from './UserModal.module.css';
import { EditProfile } from '../../components/EditProfile/EditProfile';
import { editUser } from '../../services/user';


function UserModalComponent(props) {
  
  function closeModal() {
    props.history.goBack();
  }

  function update(data){
    console.log("update");
    console.log(data);
    let id = localStorage.getItem('id');
    editUser(data,id).then(response => console.log(response))
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <EditProfile onClick={closeModal} update ={update} />
      </div>
    </div>
  ); 
}

export const UserModal = observer(UserModalComponent);
