import React  from 'react'
import styles from './Forms.module.css';
import { observer } from 'mobx-react';


function RegisterFormComponent(props) {  
  return (
    <form onSubmit = {props.handleSubmit(props.onRegister)}>
    <div className = {styles.wrapper}>
    <h2>Register</h2>
    <input name = "user.first_name"
           placeholder = "First name"
           type = "text"
           ref = {props.register({
           required: 'First name is required!',
        })}
       />
       {props.errors['user.first_name'] && props.errors['user.first_name'].message}
    <input name = "user.last_name"
           placeholder = "Last name"
           type = "text"
           ref = {props.register({
           required: 'Last name is required!',
        })}
       />
       {props.errors['user.last_name'] && props.errors['user.last_name'].message}
       <input name = "user.email"
           placeholder = "Username"
           type = "email"
           ref = {props.register({
              required: 'Email is required!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'This is not an email format!',
              },
            })}
       />
       {props.errors['user.email'] && props.errors['user.email'].message}
    <input type = "password"
           name = "user.password"
           placeholder = "Password"
           ref = {props.register({
              validate: (value) => Boolean(value.length > 3) || 'Use a stronger password',
            })}
           required/>
       {props.errors['user.password'] && props.errors['user.password'].message}

    <button type = "submit" 
            className = { styles.btn }>Register</button>
    </div>
    </form>
  );
}

export const RegisterForm = observer (RegisterFormComponent)
