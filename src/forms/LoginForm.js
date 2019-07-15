import React, {useState} from 'react';
import { Redirect } from "react-router-dom";
import styles from './Forms.module.css';
import {login} from '../services/auth';


export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false)


  const handleSubmit = e => {
    e.preventDefault();
    const session = {};
    session.email = email;
    session.password = password;
    console.log("ono što šaljem")
    login(session)
    setLoggedIn(true);
  }

  return (
        <form onSubmit = {handleSubmit}>
        { loggedIn && <Redirect to="/profile"></Redirect>}

        <div className={styles.wrapper}>
        <h2>Login</h2>
        <input type="text" 
               value= {email}
               onChange={e => setEmail(e.target.value)}
               placeholder="Username" 
               required/>
        <input type="password" 
               value={password}
               placeholder="Password" 
               onChange={e => setPassword(e.target.value)}
               required/>
        
        <div className={styles.text}>
          <input type="checkbox" 
                id={styles.rememberMe} 
                name="rememberMe"/>
          <label>Remember me</label>
        </div>
        <button type="submit" 
                className={styles.btn}>
                Login
        </button>
        <div className={styles.text}>
          <p> Don't have an account?</p>
          <p><a className={styles.blueTxt} 
                href="/register"> Register here </a></p>
        </div>
        </div>
        </form>
  )
};
