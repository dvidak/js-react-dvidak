import React from 'react';
import styles from './Forms.module.css';
import { observer } from 'mobx-react';

function LoginFormComponent(props) {
  return (
        <form onSubmit = {props.handleSubmit(props.onLogin)}>
        <div className={styles.wrapper}>
        <h2>Login</h2>
        <input name="session.email" 
               type="email" 
               ref={props.register} 
               placeholder="Email"
               required />

        <input name="session.password" 
               type="password" 
               ref={props.register} 
               placeholder="Password" />
        
        <div className={styles.text}>
          <input type='checkbox' 
                id={styles.rememberMe} 
                name='rememberMe'/>
          <label>Remember me</label>
        </div>
        <button type='submit'
                className={styles.btn}>
                Login
        </button>
        <div className={styles.text}>
          <p> Don't have an account?</p>
          <p><a className={styles.blueTxt} 
                href='/register'> Register here </a></p>
        </div>
        </div>
        </form>
  )
};

export const LoginForm = observer (LoginFormComponent)
