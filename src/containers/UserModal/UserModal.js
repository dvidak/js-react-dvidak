import React from 'react';
import { observer } from 'mobx-react';
import styles from './UserModal.module.css';
import { EditProfile } from '../../components/EditProfile/EditProfile';


function UserModalComponent(props) {
  
  function closeModal() {
    props.history.goBack();
  }

  return (
    <div className={styles.modalContainer}>
      <p>hej ja sam modal</p>
      <div className={styles.modalContent}>
        <EditProfile onClick={closeModal} />
      </div>
    </div>
  ); 
}

export const UserModal = observer(UserModalComponent);
