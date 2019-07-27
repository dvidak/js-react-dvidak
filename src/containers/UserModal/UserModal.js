import React from 'react';
import { observer } from 'mobx-react';
import styles from './UserModal.module.css';
import { EditProfile } from '../../components/EditProfile/EditProfile';
import { editUser } from '../../services/user';
import { login } from '../../services/auth';


function UserModalComponent(props) {
  const [ file, setFile] = React.useState('');

  
  function closeModal() {
    props.history.goBack();
  }

  function update(data){
    let session = {
      session :{
      email: data.email, 
      password: data.old_password
      }
    }
    let id = localStorage.getItem('id');
  
    const user = {
      email : data.email,
      first_name : data.first_name,
      last_name : data.last_name,
      password : data.password,
      image_url : file
    }
    
    login(session).then( (response) => {
      if(response.session.user){
        if(data.new_password !== data.confirm_password){
          alert ("New and confirm password does not match ")
        }else{
          editUser(user,id).then( () =>{
            alert ("Changes saved!")
            closeModal();
          })
        }
      }else{
        alert("Old password invalid")
      }
    });


  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <EditProfile onClick={closeModal} 
                     update ={update}
                     file = {file}
                     setFile = {setFile} />
      </div>
    </div>
  ); 
}

export const UserModal = observer(UserModalComponent);
