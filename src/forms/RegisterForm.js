import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import styles from './Forms.module.css';


export function RegisterForm() {  
  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconf, setPasswordConf] = useState('')
  const [registered, setRegistered] = useState(false)



  const handleSubmit = e => {
    e.preventDefault();
   
    if(password === passwordconf){
    fetch("https://flighter-hw7.herokuapp.com/api/users", {
      method: 'POST',
      body: JSON.stringify({
        user : {
          email: email,
          first_name: name,
          last_name: name,
          password: password,
        }
      }),
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => {
        if(res.user){
          setRegistered(true);
          alert("Success! Please login in!")
        }else{
          alert("Error! Please try again!")
        }
        console.log(res.user.id);
    }).catch(error => console.error('Error:', error));
}else{
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

