import React from 'react';
import styles from './Forms.module.css';
import { observer } from 'mobx-react';

function LoginFormComponent(props) {
  return (
        <form onSubmit = {props.handleSubmit}>
        <div className={styles.wrapper}>
        <h2>Login</h2>
        <input type="text" 
               value= {props.email}
               onChange={e => props.setEmail(e.target.value)}
               placeholder="Username" 
               required/>
        <input type="password" 
               value={props.password}
               placeholder="Password" 
               onChange={e => props.setPassword(e.target.value)}
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

export const LoginForm = observer (LoginFormComponent)
