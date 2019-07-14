import React, { useState } from 'react'
import { Redirect } from "react-router-dom";



export function RegisterForm() {  
  const [name, setName] = useState('')
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconf, setPasswordConf] = useState('')
  const [reg, setReg] = useState(false)



  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
    console.log(name[0]);
    console.log(name[1]);
    console.log(email);
    console.log(password);
    console.log(passwordconf);

    if(password === passwordconf){
    fetch("https://flighter-hw7.herokuapp.com/api/users", {
      method: 'POST',
      body: JSON.stringify({
        user : {
          email: email,
          first_name: name,
          last_name: name,
          password: password,
        }
      }),
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => {
        if(res.user){
          setReg(true);
          alert("Success! Please login in!")
        }else{
          alert("Error! Please try again!")
        }
        console.log(res.user.id);
    }).catch(error => console.error('Error:', error));
}else{
  alert("Password and confirm password does not match!")
}
}

  return (
    <form onSubmit = {handleSubmit}>
    { reg && <Redirect to="/login"></Redirect>}

    <div className="regWrapper">
    <h2>Register</h2>
    <input type="text" 
           value= {name}
           placeholder="Full name" 
           onChange={e => setName(e.target.value)}
           required/>
    <input type="text" 
           placeholder="Username" 
           value={email}
           onChange={e => setEmail(e.target.value)}
           required/>
    <input type="password" 
           value={password}
           placeholder="Password" 
           onChange={e => setPassword(e.target.value)}
           required/>
    <input type="password" 
           value={passwordconf}
           placeholder="Confirm password"
           onChange={e => setPasswordConf(e.target.value)}

           required/>
    <button type="submit" className="btn">Register</button>
    </div>
    </form>
  );
}

