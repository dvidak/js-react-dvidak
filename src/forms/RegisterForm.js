import React  from 'react'
import styles from './Forms.module.css';
import useForm from 'react-hook-form';
import { observer } from 'mobx-react';


function RegisterFormComponent(props) { 
  const { register, handleSubmit, errors } = useForm();
 
  return (
    <form onSubmit = {handleSubmit(props.onRegister)}>
      <div className = {styles.wrapper}>
        <h2>Register</h2>
    
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
        <p className={styles.error}>{errors['user.last_name'] && errors['user.last_name'].message}</p>
    
        <input name = "user.email"
               placeholder = "Username"
               type = "email"
               ref = {register({
                  required: 'Email is required!',
                  pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'This is not an email format!'},})}/>
        <p className={styles.error}>{errors['user.email'] && errors['user.email'].message}</p>
    
        <input type = "password"
               name = "user.password"
               placeholder = "Password"
               ref = {register({
                  required: 'Password is required!',
                  validate: (value) => Boolean(value.length > 3) || 'Use a stronger password!'})}/>
        <p className={styles.error}>{errors['user.password'] && errors['user.password'].message}</p>       
    
        <button type = "submit" 
                className = { styles.btn }>Register</button>
      </div>
    </form>
  );
}

export const RegisterForm = observer (RegisterFormComponent)
