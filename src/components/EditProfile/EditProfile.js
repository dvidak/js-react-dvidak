import React, {useState}  from 'react';
import styles from './EditProfile.module.css'
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useDropzone } from 'react-dropzone';
import useForm from 'react-hook-form';
import { uploadPhoto } from '../../services/api';


function EditProfileComponent(props) {
  const { register, handleSubmit, errors } = useForm();
  const [ file, setFile] = useState(null);

  function onDrop(files) {
    console.log(files[0]);
    uploadPhoto(files[0]).then(data => {
      console.log(JSON.stringify(data))
      let formatedData = JSON.stringify(data)
      console.log(formatedData.imageUrl)
     setFile(formatedData.imageUrl)
     console.log(file);
  })
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});
  
  return (
     <div>
       <button className = {styles.icon} 
                  onClick = {props.onClick}>
                  <FontAwesomeIcon  icon = {faWindowClose}/>
        </button>
        <div class = {styles.pictureBox}>
          <div className={styles.inner1}>
                    <img src={require('../../img/preuzmi.png')} 
                         height="150" 
                         alt="Upload"
                         width="150 " />
          </div>
          <div {...getRootProps()}>
            <input className = {styles.inner1Txt} {...getInputProps()} />
                {isDragActive ?
                <p>Drop your file!</p> :
                <p> Chage photo!</p>
                }
          </div>
        </div>
        
        <div className = {styles.wrapper}>
          <form onSubmit = {handleSubmit(props.update)}>
            <input name="user.email" 
                   type="email" 
                   placeholder="Email"
                   ref = {register({
                    required: 'Email is required!',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'This is not an email format!'},})}/>
            <span className={styles.error}>{errors['user.email'] && errors['user.email'].message}</span>
            <input name = "user.first_name"
                   placeholder = "First name"
                   type = "text"
                   ref = {register({
                    required: 'First name is required!',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'This is not valid name!'} })}/>
            <span className={styles.error}>{errors['user.first_name'] && errors['user.first_name'].message}</span>
            <input name = "user.last_name"
                   placeholder = "Last name"
                   type = "text"
                   ref = {register({
                    required: 'Last name is required!',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'This is not valid last name!'}})}/>
            <span className={styles.error}>{errors['user.last_name'] && errors['user.last_name'].message}</span>
            <input name=""
                   type="password" 
                   placeholder="Old password"
                   ref={register({
                    required: 'Old password is required!',
                    })}/> 
            <span className={styles.error}>{errors['user.password'] && errors['user.password'].message}</span>
            <input name="user.password" 
                   type="password" 
                   placeholder="New password"
                   ref={register({
                    required: 'New password is required!',
                    })}/> 
            <span className={styles.error}>{errors['user.password'] && errors['user.password'].message}</span>
            <input name="user.password" 
                   type="password" 
                   placeholder="Confirm password"
                   ref={register({
                    required: 'Confirm password is required!',
                    })}/> 
            <span className={styles.error}>{errors['user.password'] && errors['user.password'].message}</span>
            <button type="submit"
                    className={styles.btn}>
                    Save changes
            </button>
          </form>
        </div>
      </div>

  );
};

export const EditProfile = observer (EditProfileComponent)

