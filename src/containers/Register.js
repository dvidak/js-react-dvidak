import React, { useState } from 'react'
import { RegisterForm } from '../forms/RegisterForm';
import { observer } from 'mobx-react';
import { register } from '../services/auth';
import { Login } from './Login';

function RegisterPageContainer(props) {
  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconf, setPasswordConf] = useState('')
  const [registered, setRegistered] = useState(false)


  const handleSubmit = e => {
    e.preventDefault();
    if(password === passwordconf){
        const user = {}
        user.email = email;
        user.first_name = name;
        user.last_name = name;
        user.password = password;
        register(user).then( () => {
          setRegistered(true);
          alert("Success! Please login in!")
          props.history.push('/login');
        }
        );
    } else{
     alert("Password and confirm password does not match!")
    }
  }

  return (
    registered ? 
    <Login/> : 
    <RegisterForm register = {register}
                  handleSubmit = {handleSubmit}
                  name = {name}
                  setName = {setName}
                  email = {email}
                  setEmail = {setEmail}
                  password = {password}
                  setPassword = {setPassword}
                  passwordconf = {passwordconf}
                  setPasswordConf = {setPasswordConf}
                  />
  );
};

export const Register = observer (RegisterPageContainer)