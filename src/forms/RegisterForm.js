import React  from 'react'
import styles from './Forms.module.css';
import { observer } from 'mobx-react';


function RegisterFormComponent(props) {  
  return (
    <form onSubmit = {props.handleSubmit}>
    <div className={styles.wrapper}>
    <h2>Register</h2>
    <input type="text" 
           value= {props.name}
           placeholder="Full name" 
           onChange={e => props.setName(e.target.value)}
           required/>
    <input type="text" 
           placeholder="Username" 
           value={props.email}
           onChange={e => props.setEmail(e.target.value)}
           required/>
    <input type="password" 
           value={props.password}
           placeholder="Password" 
           onChange={e => props.setPassword(e.target.value)}
           required/>
    <input type="password" 
           value={props.passwordconf}
           placeholder="Confirm password"
           onChange={e => props.setPasswordConf(e.target.value)}
           required/>
    <button type="submit" 
            className={styles.btn}>Register</button>
    </div>
    </form>
  );
}

export const RegisterForm = observer (RegisterFormComponent)
