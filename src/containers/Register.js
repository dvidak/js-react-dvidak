import React from 'react';
import { RegisterForm } from '../forms/RegisterForm';
import { Profile } from './Profie';
import { observer } from 'mobx-react';
import { appState } from '../state/AppState';


export function RegisterPageContainer() {
  return (
    localStorage.getItem('token') ? <Profile/> : <RegisterForm/>
  );
};

export const Register = observer (RegisterPageContainer)