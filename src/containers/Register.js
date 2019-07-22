import React  from 'react'
import useForm from 'react-hook-form';
import { RegisterForm } from '../forms/RegisterForm';
import { Login } from './Login';
import { observer } from 'mobx-react';
import { createUser } from '../services/auth';

function RegisterPageContainer(props) {
  const { register, handleSubmit, errors } = useForm();
  
  function onRegister(data){
      createUser(data)
  }

  return ( 
    <RegisterForm register = {register}
                  handleSubmit = {handleSubmit}
                  onRegister = {onRegister}
                  errors = {errors}/>
  );
};

export const Register = observer (RegisterPageContainer)