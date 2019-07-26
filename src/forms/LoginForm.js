import React from 'react';
import styles from './Forms.module.css';
import useForm from 'react-hook-form';
import { observer } from 'mobx-react';

function LoginFormComponent(props) {
  const { register, handleSubmit, errors } = useForm();

  function onChange(){
    
  }

  return (
        <form onSubmit = {handleSubmit(props.onLogin)}>
          <div className={styles.wrapper}>
            <h2>Login</h2>
            <input name="session.email" 
                   type="email" 
                   placeholder="Email"
                   ref = {register({
                    required: 'Email is required!',
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'This is not an email format!'},})}/>
            <p className={styles.error}>{errors['session.email'] && errors['session.email'].message}</p>
            <input name="session.password" 
                   type="password" 
                   placeholder="Password"
                   ref={register({
                    required: 'Password is required!',
                    })}/> 
            <p className={styles.error}>{errors['session.password'] && errors['session.password'].message}</p>  
            <div className={styles.text}>
              <input type="checkbox"
                     id={styles.rememberMe} 
                     onChange = {onChange}
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
