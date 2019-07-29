import React  from 'react';
import { LoginForm } from '../forms/LoginForm';
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react';
import { login } from '../services/auth';


function LoginPageContainer(props) {
  function onLogin(data) {
    login(data).then(res => {
      if(res.session){
        props.history.go ('/profile');
      }else{
        alert("Error! Please try again");
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