import React from 'react';
import { RegisterForm } from '../forms/RegisterForm';
import { Profile } from './Profie';
import { observer } from 'mobx-react';
import {register} from '../services/auth';



export function RegisterPageContainer() {
  return (
    localStorage.getItem('token') ? <Profile/> : <RegisterForm register = {register}/>
  );
};

export const Register = observer (RegisterPageContainer)