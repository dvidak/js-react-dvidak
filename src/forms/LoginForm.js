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
                   placeholder="Email"
                   ref = {props.register({
                    required: 'Email is required!',
                    })}/>
            <p className={styles.error}>{props.errors['session.email'] && props.errors['session.email'].message}</p>
            <input name="session.password" 
                   type="password" 
                   placeholder="Password"
                   ref={props.register({
                    required: 'Password is required!',
                    })}/> 
            <p className={styles.error}>{props.errors['session.password'] && props.errors['session.password'].message}</p>  
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
                    href='/register'> 
                    Register here 
              </a></p>
            </div>
          </div>
        </form>
  )
};

export const LoginForm = observer (LoginFormComponent)
