import React from 'react';
import { observer } from 'mobx-react';
import styles from '../style/containers.module.css'
import { EditProfile } from '../components/EditProfile/EditProfile';
import { editUser } from '../services/user';
import { login } from '../services/auth';
import { getUser  } from '../services/user';
import { uploadPhoto } from '../services/photoApi';


function UserModalComponent(props) {
  const [ file, setFile] = React.useState('');
  const [ userData, setUserData ] = React.useState({});
  let id = localStorage.getItem('id');

  React.useEffect( () => {
    getUser(id).then( (u) => {
      setUserData(u)
    });
  }, [id])

  
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
      
    const user = {
      email : data.email,
      first_name : data.first_name,
      last_name : data.last_name,
      password : data.password,
      image_url : file
    }
    
    if (data.new_password !== data.confirm_password){
      alert ("New and confirm password does not match ")
    } else {
      login(session).then( (response) => {
        if(response.session.user){
            editUser(user,id).then( () =>{
              alert ("Changes saved!")
              closeModal();
            })
        }else{
          alert("Old password invalid")
        }
      });
  }
}

  return (
    <div className={styles.modalContainer}>
      <div className={styles.userModalContent}>
        <EditProfile userData = {userData} 
                     onClick={closeModal} 
                     update ={update}
                     file = {file}
                     setFile = {setFile}
                     uploadPhoto = {uploadPhoto} />
      </div>
    </div>
  ); 
}

export const UserModal = observer(UserModalComponent);
