import React , {useState}  from 'react'
import useForm from 'react-hook-form';
import { RegisterForm } from '../forms/RegisterForm';
import { Login } from './Login';

import { observer } from 'mobx-react';
import { createUser } from '../services/auth';

function RegisterPageContainer(props) {
  const { register, handleSubmit, errors } = useForm();
  const [ success, setSuccess] = useState(false);
  
  function onRegister(data){
      createUser(data).then( res => console.log(res));
  }

  return (
    success ? 
    <Login/> :
    <RegisterForm register = {register}
                  handleSubmit = {handleSubmit}
                  onRegister = {onRegister}
                  errors = {errors}/>
  );
};

export const Register = observer (RegisterPageContainer)