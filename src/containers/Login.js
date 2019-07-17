import React from 'react';
import { LoginForm } from '../forms/LoginForm';
import { Profile } from './Profie';
import { observer } from 'mobx-react';
import { appState } from '../state/AppState';


export function LoginPageContainer() {
  return (
    localStorage.getItem('token') ? <Profile/> : <LoginForm/>
  );
};

export const Login = observer (LoginPageContainer)