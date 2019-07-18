import React from 'react';
import { LoginForm } from '../forms/LoginForm';
import { Profile } from './Profie';
import { observer } from 'mobx-react';
import {login} from '../services/auth';


export function LoginPageContainer() {
  return (
    localStorage.getItem('token') ? <Profile/> : <LoginForm login = {login}/>
  );
};

export const Login = observer (LoginPageContainer)