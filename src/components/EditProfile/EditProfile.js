import React from 'react';
import styles from './EditProfile.module.css'
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useDropzone } from 'react-dropzone';
import useForm from 'react-hook-form';
import { uploadPhoto } from '../../services/api';

function EditProfileComponent(props) {
  const { register, handleSubmit, errors } = useForm();

  function onDrop(files) {
    uploadPhoto(files[0]).then(data => {
      let formatedData = (data)
      props.setFile(formatedData.imageUrl)
    })
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

  return (
     <div>
       <button className = {styles.icon} 
                  onClick = {props.onClick}>
                  <FontAwesomeIcon  icon = {faWindowClose}/>
        </button>
        <h2> Edit profile </h2>
        <div class = {styles.pictureBox}>
          { props.fie ? 
          <div className={styles.inner1}>
                    <img src={props.file} 
                         height="100" 
                         alt="None"
                         width="100 " />
          </div> :
          <div className={styles.inner1}>
          <img className = {styles.centerPic} src={props.userData.image_url} />
          </div> }
          <div {...getRootProps()}>
            <input className = {styles.inner1Txt} {...getInputProps()} />
                {isDragActive ?
                <h3>Drop your file!</h3> :
                <h3> Change photo!</h3>
                }
          </div>
        </div>
        <div className = {styles.wrapper}>
          <form onSubmit = {handleSubmit(props.update)}>
            <div className = {styles.leftCol}>
            <label for="email">Username</label>
            <input name="email" 
                   type="email" 
                   defaultValue = {props.userData.email}
                   ref = {register({
                    required: 'Email is required!',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'This is not an email format!'},})}/>
            <span className={styles.error}>{errors['email'] && errors['email'].message}</span>

            <label for="last_name">Last name</label>
            <input name = "last_name"
                   defaultValue = {props.userData.last_name}
                   placeholder = "Last name"
                   type = "text"
                   ref = {register({
                    required: 'Last name is required!',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'This is not valid last name!'}})}/>
            <span className={styles.error}>{errors['last_name'] && errors['last_name'].message}</span>
            <label for="new_password">New password</label>
            <input name="new_password" 
                   type="password" 
                   placeholder="*******"
                   ref={register({
                    required: 'New password is required!',
                    })}/> 
            <span className={styles.error}>{errors['password'] && errors['password'].message}</span>
            </div>
            <div className = {styles.rightCol}>
            <label for="first_name">First name</label>
            <input name = "first_name"
                   defaultValue = {props.userData.first_name}
                   placeholder = "First name"
                   type = "text"
                   ref = {register({
                    required: 'First name is required!',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'This is not valid name!'} })}/>
            <span className={styles.error}>{errors['first_name'] && errors['first_name'].message}</span>
            <label for="old_password">Old password</label>
            <input name="old_password"
                   type="password" 
                   placeholder="*******"
                   ref={register({
                    required: 'Old password is required!',
                    })}/> 
            <span className={styles.error}>{errors['password'] && errors['password'].message}</span>
        
            <label for="confirm_password">Confirm password</label>
            <input name="confirm_password" 
                   type="password" 
                   placeholder="*******"
                   ref={register({
                    required: 'Confirm password is required!',
                    })}/> 
            <span className={styles.error}>{errors['password'] && errors['password'].message}</span>
            
            </div>


            
           
           
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

