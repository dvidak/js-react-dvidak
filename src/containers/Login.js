import React  from 'react';
import useForm from 'react-hook-form';
import { LoginForm } from '../forms/LoginForm';
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react';
import { login } from '../services/auth';


function LoginPageContainer() {
  const { register, handleSubmit, errors } = useForm();

  function onLogin(data) {
    login(data)
  }

  return (
    localStorage.getItem('token') ? 
    <Redirect to="/profile" /> : 
    <LoginForm login = {login} 
               handleSubmit = {handleSubmit} 
               onLogin = {onLogin}
               errors = {errors}
               register = {register}/>
  );
};

export const Login = observer (LoginPageContainer)