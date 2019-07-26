import React  from 'react'
import useForm from 'react-hook-form';
import { observer } from 'mobx-react';
import { createUser } from '../services/auth';
import { RegisterForm } from '../forms/RegisterForm';

function RegisterPageContainer(props) {  
  function onRegister(data){
      createUser(data);
      window.location.reload();
  }

  return (
    <RegisterForm onRegister = {onRegister}/>
  );
};

export const Register = observer (RegisterPageContainer)