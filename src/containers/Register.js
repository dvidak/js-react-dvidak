import React , {useState}  from 'react'
import useForm from 'react-hook-form';
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react';
import { createUser } from '../services/auth';
import { RegisterForm } from '../forms/RegisterForm';

function RegisterPageContainer(props) {
  const { register, handleSubmit, errors } = useForm();
  
  function onRegister(data){
      createUser(data);
      window.location.reload();
  }

  return (
    localStorage.getItem('registered') ? 
    <Redirect to="/login" /> :     
    <RegisterForm register = {register}
                  handleSubmit = {handleSubmit}
                  onRegister = {onRegister}
                  errors = {errors}/>
  );
};

export const Register = observer (RegisterPageContainer)