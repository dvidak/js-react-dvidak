import React  from 'react';
import { LoginForm } from '../forms/LoginForm';
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react';
import { login } from '../services/auth';


function LoginPageContainer(props) {
  function onLogin(data) {
    login(data).then(res => {
      if(res.session){
        console.log(props.history);
        console.log(props.location.pathname);
        props.history.go ('/profile');
      }
    });
  }

  return (
    localStorage.getItem('token') ? 
    <Redirect to="/profile" /> : 
    <LoginForm onLogin = {onLogin}/>
  );
};

export const Login = observer (LoginPageContainer)