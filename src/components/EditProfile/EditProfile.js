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
        <div class = {styles.pictureBox}>
          <div className={styles.inner1}>
                    <img src={props.file} 
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
            <input name="email" 
                   type="email" 
                   placeholder="Email"
                   ref = {register({
                    required: 'Email is required!',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'This is not an email format!'},})}/>
            <span className={styles.error}>{errors['email'] && errors['email'].message}</span>
            <input name = "first_name"
                   placeholder = "First name"
                   type = "text"
                   ref = {register({
                    required: 'First name is required!',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'This is not valid name!'} })}/>
            <span className={styles.error}>{errors['first_name'] && errors['first_name'].message}</span>
            <input name = "last_name"
                   placeholder = "Last name"
                   type = "text"
                   ref = {register({
                    required: 'Last name is required!',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'This is not valid last name!'}})}/>
            <span className={styles.error}>{errors['last_name'] && errors['last_name'].message}</span>
            <input name="old_password"
                   type="password" 
                   placeholder="Old password"
                   ref={register({
                    required: 'Old password is required!',
                    })}/> 
            <span className={styles.error}>{errors['password'] && errors['password'].message}</span>
            <input name="new_password" 
                   type="password" 
                   placeholder="New password"
                   ref={register({
                    required: 'New password is required!',
                    })}/> 
            <span className={styles.error}>{errors['password'] && errors['password'].message}</span>
            <input name="confirm_password" 
                   type="password" 
                   placeholder="Confirm password"
                   ref={register({
                    required: 'Confirm password is required!',
                    })}/> 
            <span className={styles.error}>{errors['password'] && errors['password'].message}</span>
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

