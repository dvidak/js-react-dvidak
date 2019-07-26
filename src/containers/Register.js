import React  from 'react'
import { observer } from 'mobx-react';
import { createUser } from '../services/auth';
import { RegisterForm } from '../forms/RegisterForm';

function RegisterPageContainer(props) {  
  function onRegister(data){
      createUser(data).then( res => {
      if(res.user){
        props.history.push('/login')
      }
    });
  }

  return (
    <RegisterForm onRegister = {onRegister}/>
  );
};

export const Register = observer (RegisterPageContainer)