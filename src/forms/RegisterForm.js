import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import styles from './Forms.module.css';
import {register} from '../services/auth';
import { observer } from 'mobx-react';


function RegisterFormComponent() {  
  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconf, setPasswordConf] = useState('')
  const [registered, setRegistered] = useState(false)



  const handleSubmit = e => {
    e.preventDefault();
    if(password === passwordconf){
        const user = {}
        user.email = email;
        user.first_name = name;
        user.last_name = name;
        user.password = password;
        register(user)
        setRegistered(true);
    } else{
     alert("Password and confirm password does not match!")
    }
  }

  return (
    <form onSubmit = {handleSubmit}>
    { registered && <Redirect to="/login"></Redirect>}

    <div className={styles.wrapper}>
    <h2>Register</h2>
    <input type="text" 
           value= {name}
           placeholder="Full name" 
           onChange={e => setName(e.target.value)}
           required/>
    <input type="text" 
           placeholder="Username" 
           value={email}
           onChange={e => setEmail(e.target.value)}
           required/>
    <input type="password" 
           value={password}
           placeholder="Password" 
           onChange={e => setPassword(e.target.value)}
           required/>
    <input type="password" 
           value={passwordconf}
           placeholder="Confirm password"
           onChange={e => setPasswordConf(e.target.value)}
           required/>
    <button type="submit" 
            className={styles.btn}>Register</button>
    </div>
    </form>
  );
}

export const RegisterForm = observer (RegisterFormComponent)


