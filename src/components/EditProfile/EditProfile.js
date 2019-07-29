import React from 'react';
import styles from './EditProfile.module.css'
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useDropzone } from 'react-dropzone';
import useForm from 'react-hook-form';

function EditProfileComponent(props) {
  const { register, handleSubmit, errors } = useForm();

  function onDrop(files) {
    props.uploadPhoto(files[0]).then(data => {
      let formatedData = (data)
      props.setFile(formatedData.imageUrl)
      return props.file;
    })
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

  let pic = props.file === '' ? props.userData.image_url : props.file; 

  return (
     <div>
       <button className = {styles.icon} 
                  onClick = {props.onClick}>
                  <FontAwesomeIcon  icon = {faWindowClose}/>
        </button>
        <h2> Edit profile </h2>
        <div className = {styles.pictureBox}>
          <div className={styles.inner1}>
                    <img src={pic} 
                         height="60" 
                         alt="None"
                         width="60" />
          </div> 
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
            <label htmlFor="email">Username</label>
            <input name="email" 
                   type="email" 
                   defaultValue = {props.userData.email}
                   ref = {register({
                    required: 'Email is required!',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'This is not an email format!'},})}/>
            <span className={styles.error}>{errors['email'] && errors['email'].message}</span>

            <label htmlFor="last_name">Last name</label>
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
            <label htmlFor="new_password">New password</label>
            <input name="new_password" 
                   type="password" 
                   placeholder="*******"
                   ref={register({
                    required: 'New password is required!',
                    })}/> 
            <span className={styles.error}>{errors['new_password'] && errors['new_password'].message}</span>
            </div>
            <div className = {styles.rightCol}>
            <label htmlFor="first_name">First name</label>
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
            <label htmlFor="old_password">Old password</label>
            <input name="old_password"
                   type="password" 
                   placeholder="*******"
                   ref={register({
                    required: 'Old password is required!',
                    })}/> 
            <span className={styles.error}>{errors['old_password'] && errors['old_password'].message}</span>
        
            <label htmlFor="confirm_password">Confirm password</label>
            <input name="confirm_password" 
                   type="password" 
                   placeholder="*******"
                   ref={register({
                    required: 'Confirm password is required!',
                    })}/> 
            <span className={styles.error}>{errors['confirm_password'] && errors['confirm_password'].message}</span>
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

