import React, {useState}  from 'react';
import { LoginForm } from '../forms/LoginForm';
import { Profile } from './Profile';
import { observer } from 'mobx-react';
import {login} from '../services/auth';


function LoginPageContainer(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const session = {};
    session.email = email;
    session.password = password;
    login(session).then( () => {
        props.history.push('/profile');
    });
  }

  return (
    localStorage.getItem('token') ? 
    <Profile/> : 
    <LoginForm login = {login} 
               handleSubmit = {handleSubmit} 
               email = {email}
               setEmail = {setEmail} 
               password = {password}
               setPassword = {setPassword}/>
  );
};

export const Login = observer (LoginPageContainer)